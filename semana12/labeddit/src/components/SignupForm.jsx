import React, { useState } from 'react';
import {
  FormControl, Image, Input, Button, useToast,
} from '@chakra-ui/core';
import logo from '../assets/main_logo.svg';
import { useAuth } from '../contexts/AuthProvider';
import useForm from '../hooks/useForm';
import api from '../services/api';

const SignupForm = () => {
  const toast = useToast();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm, resetForm] = useForm({
    email: '',
    password: '',
    username: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await api.post('/signup', form);
      login(data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast({
          title: 'Signup',
          description: error.response.data.message,
          status: 'error',
          position: 'top',
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Signup',
          description: 'Erro ao fazer cadastro',
          status: 'error',
          position: 'top',
          duration: 2000,
          isClosable: true,
        });
      }
      resetForm();
    }

    setIsLoading(false);
  };

  return (
    <FormControl
      as="form"
      mt={4}
      display="flex"
      flexDirection="column"
      onSubmit={handleSubmit}
    >
      <Image src={logo} alt="logo" />
      <Input
        id="signup-username"
        mt={4}
        type="text"
        placeholder="Nome de usuário"
        name="username"
        value={form.username}
        onChange={setForm}
        isRequired
      />
      <Input
        id="signup-email"
        mt={4}
        type="email"
        placeholder="E-mail"
        name="email"
        value={form.email}
        onChange={setForm}
        isRequired
      />
      <Input
        id="signup-password"
        mt={4}
        type="password"
        placeholder="Senha"
        name="password"
        value={form.password}
        onChange={setForm}
        isRequired
      />
      <Button
        isLoading={isLoading}
        type="submit"
        mt={8}
        colorScheme="blue"
      >
        Cadastrar
      </Button>
    </FormControl>
  );
};

export default SignupForm;
