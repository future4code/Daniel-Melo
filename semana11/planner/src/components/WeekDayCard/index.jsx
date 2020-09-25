import React from 'react';
import TaskItem from '../TaskItem';

const WeekDayCard = ({ weekDay, tasks, update }) => {
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
          update={update}
        />
      ))}
    </div>
  );
};

export default WeekDayCard;
