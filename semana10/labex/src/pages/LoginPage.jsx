import React from 'react';
import LoginForm from '../components/LoginForm';
import Layout from '../components/Layout';
import Main from '../components/Main';

const LoginPage = () => (
  <Layout>
    <Main>
      <LoginForm />
    </Main>
  </Layout>
);

export default LoginPage;
