import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import Hero from '../components/Hero';

const HomePage = () => (
  <Layout>
    <Header />

    <Main row>
      <Hero />
    </Main>
  </Layout>
);

export default HomePage;
