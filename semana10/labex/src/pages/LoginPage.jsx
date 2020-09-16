import React from 'react';
import {
  Image, Flex, Button, Input, FormControl, useToast,
} from '@chakra-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import logo from '../assets/img/logo.svg';
import useInput from '../hooks/useInput';

const LoginPage = () => {
  const { login } = useAuth();
  const history = useHistory();
  const toast = useToast();
  const [email, resetEmail, setEmail] = useInput('');
  const [password, resetPassword, setPassword] = useInput('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const body = { email, password };

    try {
      const response = await api.post('/login', body);
      const { token } = response.data;
      login(token);
      history.push('/trip/list');
    } catch (error) {
      if (error.response.status === 401) {
        toast({
          position: 'top-right',
          title: error.response.data.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });

        resetPassword();
        resetEmail();
      }
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
    >
      <Flex
        direction="column"
        width="xs"
        p={8}
        boxShadow="0px 0px 10px rgba(214, 158, 46, 0.25);"
        borderRadius={8}
      >
        <Image src={logo} alt="logo" alignSelf="center" mb={16} />

        <FormControl as="form" onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={setEmail}
            mb={3}
            id="email"
            type="email"
            placeholder="E-mail"
            isRequired
            variant="flushed"
          />

          <Input
            value={password}
            onChange={setPassword}
            mb={16}
            id="password"
            type="password"
            placeholder="Senha"
            isRequired
            variant="flushed"
          />

          <Button type="submit" mb={3} variantColor="purple" width="100%">
            ENTRAR
          </Button>

          <Link to="/">
            <Button variantColor="yellow" width="100%">
              VOLTAR
            </Button>
          </Link>
        </FormControl>
      </Flex>

    </Flex>

  );
};

export default LoginPage;
