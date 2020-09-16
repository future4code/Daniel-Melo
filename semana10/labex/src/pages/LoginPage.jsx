import React from 'react';
import { Heading, Flex, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = async () => {
    const body = {
      email: 'daniel@melo.com',
      password: '12345',
    };

    try {
      const response = await api.post('/login', body);
      const { token } = response.data;
      login(token);
    } catch (error) {
      if (error.response.status === 401) {
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <Flex justify="space-between">
      <Heading>
        LoginPage
      </Heading>

      <Link to="/trip/list">
        <Button variantColor="purple" onClick={handleLogin}>
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
