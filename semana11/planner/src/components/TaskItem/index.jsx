/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import api from '../../services/api';

const TaskItem = ({
  taskName, taskId, isCompleted, update,
}) => {
  const [completed, setCompleted] = useState(isCompleted);

  const handleDelete = (id) => {
    api.delete(`/${id}`);
    update();
  };

  const toggleComplete = (id) => {
    api.put(`/${id}`, { completed: !completed });
    setCompleted((state) => !state);
  };

  return (
    <div data-testid="task-item">
      <input
        type="checkbox"
        value={completed}
        checked={completed}
        onChange={() => toggleComplete(taskId)}
      />
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'initial',
        }}
      >
        {taskName}
      </span>
      <button type="button" onClick={() => handleDelete(taskId)}>Delete</button>
    </div>
  );
};

export default TaskItem;
