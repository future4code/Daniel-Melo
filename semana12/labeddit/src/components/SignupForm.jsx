import React from 'react';
import {
  VStack, Image, Input, Button,
} from '@chakra-ui/core';
import logo from '../assets/main_logo.svg';
import { useAuth } from '../contexts/AuthProvider';

const SignupForm = () => {
  const { login } = useAuth();

  return (
    <VStack mt={4} spacing={4}>
      <Image src={logo} alt="logo" />
      <Input type="text" placeholder="Nome de usuário" />
      <Input type="text" placeholder="E-mail" />
      <Input type="password" placeholder="Senha" />
      <Button colorScheme="blue" onClick={login}>Cadastrar</Button>
    </VStack>
  );
};

export default SignupForm;
