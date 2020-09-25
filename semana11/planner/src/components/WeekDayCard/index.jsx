import React, { useState, useEffect } from 'react';
import TaskItem from '../TaskItem';
import api from '../../services/api';

const WeekDayCard = ({ weekDay }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await api.get('');
    setTasks(response.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const days = {
    sunday: 'Domingo',
    monday: 'Segunda',
    tuesday: 'Terça',
    wednesday: 'Quarta',
    thursday: 'Quinta',
    friday: 'Sexta',
    saturday: 'Sábado',
  };

  return (
    <div>
      <h2>{days[weekDay]}</h2>

      {tasks.filter((task) => task.day === weekDay).map((task) => (
        <TaskItem
          key={task.id}
          taskName={task.text}
          taskId={task.id}
          isCompleted={task.completed}
        />
      ))}
    </div>
  );
};

export default WeekDayCard;
