import { useState } from 'react';

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialState);
  };

  return [form, handleInputChange, resetForm];
};

export default useForm;
