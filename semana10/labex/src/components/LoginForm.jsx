import React from 'react';
import {
  Image, Flex, Button, Input, FormControl, useToast,
} from '@chakra-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import logo from '../assets/img/logo.svg';
import useForm from '../hooks/useForm';

const LoginForm = () => {
  const { login } = useAuth();
  const history = useHistory();
  const toast = useToast();
  const [form, setForm, resetForm] = useForm({ email: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();

    const body = { email: form.email, password: form.password };

    try {
      const { data: { token } } = await api.post('/login', body);

      login(token);
      history.push('/trip/list');
    } catch (error) {
      if (error.response.status === 401) {
        toast({
          position: 'top',
          title: error.response.data.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });

        resetForm();
      }
    }
  };

  return (
    <Flex
      direction="column"
      width="xs"
      p={8}
      boxShadow="0px 0px 10px rgba(214, 158, 46, 0.25);"
      borderRadius={8}
      alignSelf="center"
    >
      <Image src={logo} alt="logo" alignSelf="center" mb={16} />

      <FormControl as="form" onSubmit={handleLogin}>
        <Input
          value={form.email}
          onChange={setForm}
          mb={3}
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          isRequired
          variant="flushed"
        />

        <Input
          value={form.password}
          onChange={setForm}
          mb={16}
          id="password"
          name="password"
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
  );
};

export default LoginForm;
