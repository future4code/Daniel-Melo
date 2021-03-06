import React from 'react';
import useForm from '../../hooks/useForm';
import api from '../../services/api';

const CreateTaskForm = ({ update }) => {
  const [form, setForm, resetForm] = useForm({
    task: '',
    weekDay: '',
  });

  const options = [
    { value: 'sunday', label: 'Domingo' },
    { value: 'monday', label: 'Segunda' },
    { value: 'tuesday', label: 'Terça' },
    { value: 'wednesday', label: 'Quarta' },
    { value: 'thursday', label: 'Quinta' },
    { value: 'friday', label: 'Sexta' },
    { value: 'saturday', label: 'Sábado' },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    await api.post('', {
      text: form.task,
      day: form.weekDay,
      completed: false,
    });

    resetForm();
    update();
  };

  return (
    <form data-testid="create-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="Insira uma tarefa"
        value={form.task}
        onChange={setForm}
        required
      />

      <label htmlFor="week-day">
        Dia da Semana
        <select
          id="week-day"
          name="weekDay"
          value={form.weekDay}
          onChange={setForm}
          required
        >
          <option value="">-- Selecione o dia --</option>
          { options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
        </select>
      </label>

      <button type="submit">Criar Tarefa</button>
    </form>
  );
};
export default CreateTaskForm;
