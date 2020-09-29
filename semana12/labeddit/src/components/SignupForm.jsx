import React from 'react';
import {
  FormControl, Image, Input, Button,
} from '@chakra-ui/core';
import logo from '../assets/main_logo.svg';
import { useAuth } from '../contexts/AuthProvider';

const SignupForm = () => {
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    login();
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
      <Input mt={4} type="text" placeholder="Nome de usuário" isRequired />
      <Input mt={4} type="email" placeholder="E-mail" isRequired />
      <Input mt={4} type="password" placeholder="Senha" isRequired />
      <Button type="submit" mt={8} colorScheme="blue">Cadastrar</Button>
    </FormControl>
  );
};

export default SignupForm;
