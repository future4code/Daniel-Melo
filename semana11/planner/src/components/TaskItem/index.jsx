/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import api from '../../services/api';

const TaskItem = ({ taskName, taskId }) => {
  const [completed, setCompleted] = useState(false);

  const handleDelete = (id) => {
    api.delete(`/${id}`);
  };

  const toggleComplete = () => {
    setCompleted((state) => !state);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleComplete}
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
