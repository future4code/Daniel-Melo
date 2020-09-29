import React from 'react';
import {
  FormControl, Image, Input, Button,
} from '@chakra-ui/core';
import logo from '../assets/main_logo.svg';
import { useAuth } from '../contexts/AuthProvider';
import useForm from '../hooks/useForm';
import api from '../services/api';

const LoginForm = () => {
  const { login } = useAuth();
  const [form, setForm, resetForm] = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post('/login', form);
      login(data);
    } catch (error) {
      resetForm();
    }
  };

  return (
    <FormControl
      as="form"
      mt={4}
      spacing={4}
      display="flex"
      flexDirection="column"
      onSubmit={handleSubmit}
    >
      <Image src={logo} alt="logo" />
      <Input id="login-email" name="email" mt={4} type="email" placeholder="E-mail" isRequired value={form.email} onChange={setForm} />
      <Input id="login-password" name="password" mt={4} type="password" placeholder="Senha" isRequired value={form.password} onChange={setForm} />
      <Button type="submit" mt={8} colorScheme="blue">Entrar</Button>
    </FormControl>
  );
};

export default LoginForm;
