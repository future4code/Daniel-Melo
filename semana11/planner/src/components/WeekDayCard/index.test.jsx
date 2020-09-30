import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import WeekDayCard from '.';

describe('WeekDayCard component', () => {
  const tasks = [
    {
      day: 'monday',
      text: 'Lavar louça',
      completed: false,
      id: 1,
    },
    {
      day: 'sunday',
      text: 'Limpar Banheiro',
      completed: false,
      id: 2,
    },
    {
      day: 'sunday',
      text: 'Fazer Faxina',
      completed: false,
      id: 3,
    },
  ];

  test('render the weekday name', async () => {
    render(<WeekDayCard weekDay="sunday" tasks={tasks} update={jest.fn()} />);
    expect(screen.queryByText('Domingo')).toBeTruthy();

    render(<WeekDayCard weekDay="monday" tasks={tasks} />);
    expect(screen.queryByText('Segunda')).toBeTruthy();
  });

  test('render the task of the respective day', async () => {
    render(<WeekDayCard weekDay="sunday" tasks={tasks} update={jest.fn()} />);
    expect(screen.queryAllByTestId('task-item')).toHaveLength(2);

    cleanup();

    render(<WeekDayCard weekDay="monday" tasks={tasks} update={jest.fn()} />);
    expect(screen.queryAllByTestId('task-item')).toHaveLength(1);
  });
});
