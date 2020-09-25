import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import api from '../../services/api';
import TaskItem from './index';

describe('TaskItem componente', () => {
  test('render the task name', () => {
    const taskName = 'Any task';
    render(<TaskItem taskName={taskName} taskId={1} isCompleted={false} update={jest.fn()} />);

    expect(screen.queryByText(taskName)).toBeTruthy();
  });

  test('render another task name', () => {
    const taskName = 'Another task';
    render(<TaskItem taskName={taskName} taskId={1} isCompleted={false} update={jest.fn()} />);

    expect(screen.queryByText(taskName)).toBeTruthy();
  });

  test('render a delete task button', () => {
    render(<TaskItem taskName="Any" taskId={1} isCompleted={false} update={jest.fn()} />);

    expect(screen.queryByRole('button')).toBeTruthy();
  });

  test('should make a delete request to api when click delete button', () => {
    const taskName = 'Any';
    const taskId = 1;
    render(<TaskItem taskName={taskName} taskId={taskId} isCompleted={false} update={jest.fn()} />);

    const button = screen.queryByRole('button');
    api.delete = jest.fn().mockResolvedValue();

    userEvent.click(button);

    expect(api.delete).toHaveBeenCalledWith(`/${taskId}`);
  });

  test('task name should be lined-through when checked', () => {
    api.put = jest.fn().mockResolvedValue();

    const taskName = 'Any';
    const taskId = 1;
    render(<TaskItem taskName={taskName} taskId={taskId} isCompleted={false} update={jest.fn()} />);

    const span = screen.getByText(taskName);
    const checkbox = screen.getByRole('checkbox');

    userEvent.click(checkbox);

    expect(api.put).toHaveBeenCalledWith(`/${taskId}`, { completed: true });
    expect(checkbox).toBeChecked();
    expect(span).toHaveStyle('text-decoration: line-through');
  });
});
