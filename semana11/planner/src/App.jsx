import React, { useState, useEffect } from 'react';
import CreateTaskForm from './components/CreateTaskForm';
import WeekDayCard from './components/WeekDayCard';
import api from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await api.get('');
    setTasks(response.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return (
    <div className="App">
      <CreateTaskForm update={getTasks} />
      {weekDays.map((weekDay) => (
        <WeekDayCard key={weekDay} weekDay={weekDay} tasks={tasks} update={getTasks} />
      ))}
    </div>
  );
}

export default App;
