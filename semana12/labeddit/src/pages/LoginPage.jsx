import React from 'react';
import { Button } from '@chakra-ui/core';
import { useAuth } from '../contexts/AuthProvider';

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <div>
      Login Page
      <Button type="button" onClick={login} colorScheme="blue">Login</Button>
    </div>
  );
};
export default LoginPage;
