import React from 'react';
import {
  render, screen, cleanup,
} from '@testing-library/react';
import WeekDayCard from '.';
import api from '../../services/api';

jest.mock('../../services/api');

describe('WeekDayCard component', () => {
  beforeEach(() => {
    api.get.mockResolvedValue({
      data: [
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
      ],
    });
  });

  test('render the weekday name', async () => {
    render(<WeekDayCard weekDay="sunday" />);
    expect(await screen.findByText('Domingo')).toBeTruthy();

    render(<WeekDayCard weekDay="monday" />);
    expect(await screen.findByText('Segunda')).toBeTruthy();
  });

  test('render the task of the respective day', async () => {
    render(<WeekDayCard weekDay="sunday" />);

    expect(api.get).toHaveBeenCalled();
    expect(await screen.findAllByTestId('task-item')).toHaveLength(2);

    cleanup();

    render(<WeekDayCard weekDay="monday" />);

    expect(api.get).toHaveBeenCalled();
    expect(await screen.findAllByTestId('task-item')).toHaveLength(1);
  });
});
