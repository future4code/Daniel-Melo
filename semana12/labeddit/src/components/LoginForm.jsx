import React from 'react';
import {
  FormControl, Image, Input, Button,
} from '@chakra-ui/core';
import logo from '../assets/main_logo.svg';
import { useAuth } from '../contexts/AuthProvider';

const LoginForm = () => {
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    login();
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
      <Input id="login-email" mt={4} type="email" placeholder="E-mail" isRequired />
      <Input id="login-password" mt={4} type="password" placeholder="Senha" isRequired />
      <Button type="submit" mt={8} colorScheme="blue">Entrar</Button>
    </FormControl>
  );
};

export default LoginForm;
