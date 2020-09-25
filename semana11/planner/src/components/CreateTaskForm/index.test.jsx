import React from 'react';
import { render, screen, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateTaskForm from './index';
import api from '../../services/api';

describe('CreateTaskForm Component', () => {
  test('render task input', () => {
    render(<CreateTaskForm update={jest.fn()} />);
    const input = screen.queryByPlaceholderText(/insira uma tarefa/i);

    expect(input).toBeInTheDocument();
  });

  test('render a select with "Dia da Semana" label', () => {
    render(<CreateTaskForm update={jest.fn()} />);
    const select = screen.queryByLabelText('Dia da Semana', { selector: 'select' });

    expect(select).toBeInTheDocument();
  });

  test('render a create task button', () => {
    render(<CreateTaskForm update={jest.fn()} />);
    const button = screen.queryByText('Criar Tarefa');

    expect(button).toBeInTheDocument();
  });

  test('week day select should start empty', () => {
    render(<CreateTaskForm update={jest.fn()} />);
    const select = screen.queryByLabelText('Dia da Semana', { selector: 'select' });

    expect(select).toHaveValue('');
  });

  test('user should select any week day', async () => {
    render(<CreateTaskForm update={jest.fn()} />);
    const select = screen.getByLabelText('Dia da Semana', { selector: 'select' });
    const sunday = screen.queryByText('Domingo');
    const monday = screen.queryByText('Segunda');
    const tuesday = screen.queryByText('Terça');
    const wednesday = screen.queryByText('Quarta');
    const thursday = screen.queryByText('Quinta');
    const friday = screen.queryByText('Sexta');
    const saturday = screen.queryByText('Sábado');

    userEvent.selectOptions(select, 'sunday');
    expect(sunday.selected).toBeTruthy();

    userEvent.selectOptions(select, 'monday');
    expect(monday.selected).toBeTruthy();

    userEvent.selectOptions(select, 'tuesday');
    expect(tuesday.selected).toBeTruthy();

    userEvent.selectOptions(select, 'wednesday');
    expect(wednesday.selected).toBeTruthy();

    userEvent.selectOptions(select, 'thursday');
    expect(thursday.selected).toBeTruthy();

    userEvent.selectOptions(select, 'friday');
    expect(friday.selected).toBeTruthy();

    userEvent.selectOptions(select, 'saturday');
    expect(saturday.selected).toBeTruthy();
  });

  test('should return consistent form values', async () => {
    render(<CreateTaskForm update={jest.fn()} />);
    const input = screen.queryByPlaceholderText(/insira uma tarefa/i);
    const select = screen.queryByLabelText('Dia da Semana', { selector: 'select' });

    let task = 'Any Task';
    let weekDay = 'wednesday';

    await userEvent.type(input, task);
    userEvent.selectOptions(select, weekDay);

    expect(screen.getByTestId('create-task-form')).toHaveFormValues({
      task,
      weekDay,
    });

    task = 'Another task';
    weekDay = 'sunday';

    await userEvent.type(input, task);
    userEvent.selectOptions(select, weekDay);

    expect(screen.getByTestId('create-task-form')).toHaveFormValues({
      task,
      weekDay,
    });
  });

  test('form should be cleaned after submit', async () => {
    render(<CreateTaskForm update={jest.fn()} />);
    const button = screen.queryByText('Criar Tarefa');
    const input = screen.queryByPlaceholderText(/insira uma tarefa/i);
    const select = screen.queryByLabelText('Dia da Semana', { selector: 'select' });
    const form = screen.getByTestId('create-task-form');

    await userEvent.type(input, 'Any Task');
    userEvent.selectOptions(select, 'wednesday');
    userEvent.click(button);

    await wait(() => {
      expect(form).toHaveFormValues({
        task: '',
        weekDay: '',
      });
    });
  });

  test('should send a post request to API when submit', async () => {
    api.post = jest.fn();
    render(<CreateTaskForm update={jest.fn()} />);

    const input = await screen.findByPlaceholderText(/insira uma tarefa/i);
    const select = await screen.findByLabelText('Dia da Semana', { selector: 'select' });
    const button = await screen.findByText('Criar Tarefa');

    const text = 'Any Task';
    const day = 'monday';
    const completed = false;

    await userEvent.type(input, 'Any Task');
    userEvent.selectOptions(select, 'monday');
    userEvent.click(button);

    await wait(() => {
      expect(api.post).toHaveBeenCalledWith('', { text, day, completed });
    });
  });
});
