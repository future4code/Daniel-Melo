import React from 'react';
import {
  render, screen, wait,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import api from './services/api';

jest.mock('./services/api');

describe('App component', () => {
  api.get.mockResolvedValue({
    data: [
      {
        text: 'Tarefa de segunda',
        completed: false,
        day: 'monday',
        id: '5m0UMWcYotp65NHf16KK',
      }],
  });

  test('render CreateTaskForm', async () => {
    render(<App />);
    expect(await screen.findByTestId('create-task-form')).toBeInTheDocument();
  });

  test('should render seven WeekDayCards', async () => {
    render(<App />);
    expect(await screen.findAllByTestId('week-day-card')).toHaveLength(7);
  });

  test('should call update tasks after submit', async () => {
    jest.clearAllMocks();
    render(<App />);

    const input = await screen.findByPlaceholderText(/insira uma tarefa/i);
    const button = await screen.findByText('Criar Tarefa');
    const select = await screen.findByLabelText('Dia da Semana', { selector: 'select' });

    await userEvent.type(input, 'Any Task');
    userEvent.selectOptions(select, 'wednesday');
    userEvent.click(button);

    await wait(() => expect(api.get).toHaveBeenCalledTimes(2));
  });

  test('should call update tasks after delete task', async () => {
    jest.clearAllMocks();
    render(<App />);

    const button = await screen.findByText('Delete');

    userEvent.click(button);

    await wait(() => expect(api.get).toHaveBeenCalledTimes(2));
  });
});
