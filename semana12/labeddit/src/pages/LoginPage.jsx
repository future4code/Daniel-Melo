import React from 'react';
import { Button } from '@chakra-ui/core';
import Layout from '../components/Layout';
import { useAuth } from '../contexts/AuthProvider';

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <Layout>
      Login Page
      <Button type="button" onClick={login} colorScheme="blue">Login</Button>
    </Layout>
  );
};
export default LoginPage;
