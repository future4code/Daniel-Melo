import React, { useState } from 'react';
import {
  FormControl, Image, Input, Button,
} from '@chakra-ui/core';
import logo from '../assets/main_logo.svg';
import { useAuth } from '../contexts/AuthProvider';
import useForm from '../hooks/useForm';
import api from '../services/api';

const LoginForm = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm, resetForm] = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await api.post('/login', form);
      login(data);
    } catch (error) {
      setIsLoading(false);
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
      <Input
        mt={4}
        id="login-email"
        name="email"
        type="email"
        placeholder="E-mail"
        value={form.email}
        onChange={setForm}
        isRequired
      />
      <Input
        mt={4}
        id="login-password"
        name="password"
        type="password"
        placeholder="Senha"
        value={form.password}
        onChange={setForm}
        isRequired
      />
      <Button
        isLoading={isLoading}
        mt={8}
        type="submit"
        colorScheme="blue"
      >
        Entrar
      </Button>
    </FormControl>
  );
};

export default LoginForm;
