import React from 'react';
import { Heading, Flex, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <Flex justify="space-between">
      <Heading>
        LoginPage
      </Heading>

      <Link to="/trip/list">
        <Button variantColor="purple" onClick={login}>
          ENTRAR
        </Button>
      </Link>

      <Link to="/">
        <Button variantColor="yellow">
          VOLTAR
        </Button>
      </Link>
    </Flex>
  );
};

export default LoginPage;
