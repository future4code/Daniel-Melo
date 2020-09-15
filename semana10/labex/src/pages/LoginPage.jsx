import React from 'react';
import { useAuth } from '../context/AuthContext'
import { Heading, Flex, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const { login } = useAuth()

  return (
    <Flex justify="space-between">
      <Heading>
        LoginPage
      </Heading>

      <Link to='/trip/list'>
        <Button variantColor="purple" onClick={login}>
          ENTRAR
        </Button>
      </Link>

      <Link to='/'>
        <Button variantColor="yellow">
          VOLTAR
        </Button>
      </Link>
    </Flex>
  );
};

export default LoginPage;