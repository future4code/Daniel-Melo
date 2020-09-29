import React from 'react';
import {
  VStack, Image, Input, Button,
} from '@chakra-ui/core';
import logo from '../assets/main_logo.svg';
import { useAuth } from '../contexts/AuthProvider';

const LoginForm = () => {
  const { login } = useAuth();

  return (
    <VStack mt={4} spacing={4}>
      <Image src={logo} alt="logo" />
      <Input type="text" placeholder="E-mail" />
      <Input type="password" placeholder="Senha" />
      <Button colorScheme="blue" onClick={login}>Entrar</Button>
    </VStack>
  );
};

export default LoginForm;
