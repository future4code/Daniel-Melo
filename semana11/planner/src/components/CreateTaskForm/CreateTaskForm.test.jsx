import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CreateTaskForm from './index';

describe('CreateTaskForm Component', () => {
  beforeEach(() => {
    render(<CreateTaskForm />);
  });

  test('render task input', () => {
    const input = screen.queryByPlaceholderText(/insira uma tarefa/i);

    expect(input).toBeInTheDocument();
  });

  test('render a select with "Dia da Semana" label', () => {
    const select = screen.queryByLabelText('Dia da Semana', { selector: 'select' });

    expect(select).toBeInTheDocument();
  });

  test('render a create task button', () => {
    const button = screen.queryByText('Criar Tarefa');

    expect(button).toBeInTheDocument();
  });

  test('week day select should start empty', () => {
    const select = screen.queryByLabelText('Dia da Semana', { selector: 'select' });

    expect(select).toHaveValue('');
  });

  test('render all week days options', () => {
    const sunday = screen.queryByText('Domingo');
    const monday = screen.queryByText('Segunda');
    const tuesday = screen.queryByText('Terça');
    const wednesday = screen.queryByText('Quarta');
    const thursday = screen.queryByText('Quinta');
    const friday = screen.queryByText('Sexta');
    const saturday = screen.queryByText('Sábado');

    expect(sunday).toBeInTheDocument();
    expect(monday).toBeInTheDocument();
    expect(tuesday).toBeInTheDocument();
    expect(wednesday).toBeInTheDocument();
    expect(thursday).toBeInTheDocument();
    expect(friday).toBeInTheDocument();
    expect(saturday).toBeInTheDocument();
  });

  test('user should select any week day', () => {
    const select = screen.queryByLabelText('Dia da Semana', { selector: 'select' });

    fireEvent.change(select, { target: { value: 'sunday' } });
    expect(select).toHaveValue('sunday');

    fireEvent.change(select, { target: { value: 'monday' } });
    expect(select).toHaveValue('monday');

    fireEvent.change(select, { target: { value: 'tuesday' } });
    expect(select).toHaveValue('tuesday');

    fireEvent.change(select, { target: { value: 'wednesday' } });
    expect(select).toHaveValue('wednesday');

    fireEvent.change(select, { target: { value: 'thursday' } });
    expect(select).toHaveValue('thursday');

    fireEvent.change(select, { target: { value: 'friday' } });
    expect(select).toHaveValue('friday');

    fireEvent.change(select, { target: { value: 'saturday' } });
    expect(select).toHaveValue('saturday');
  });

  test('should return consistent form values', () => {
    const input = screen.queryByPlaceholderText(/insira uma tarefa/i);
    const select = screen.queryByLabelText('Dia da Semana', { selector: 'select' });

    let task = 'Any Task';
    let weekDay = 'wednesday';

    fireEvent.change(input, { target: { value: task } });
    fireEvent.change(select, { target: { value: weekDay } });

    expect(screen.getByTestId('create-task-form')).toHaveFormValues({
      task,
      weekDay,
    });

    task = 'Another task';
    weekDay = 'sunday';

    fireEvent.change(input, { target: { value: task } });
    fireEvent.change(select, { target: { value: weekDay } });

    expect(screen.getByTestId('create-task-form')).toHaveFormValues({
      task,
      weekDay,
    });

    task = 'One more task';
    weekDay = 'friday';

    fireEvent.change(input, { target: { value: task } });
    fireEvent.change(select, { target: { value: weekDay } });

    expect(screen.getByTestId('create-task-form')).toHaveFormValues({
      task,
      weekDay,
    });
  });

  test('form should be cleaned after submit', () => {
    const button = screen.queryByText('Criar Tarefa');
    const input = screen.queryByPlaceholderText(/insira uma tarefa/i);
    const select = screen.queryByLabelText('Dia da Semana', { selector: 'select' });
    const form = screen.getByTestId('create-task-form');

    fireEvent.change(input, { target: { value: 'Any Task' } });
    fireEvent.change(select, { target: { value: 'wednesday' } });
    fireEvent.click(button);

    expect(form).toHaveFormValues({
      task: '',
      weekDay: '',
    });
  });
});
