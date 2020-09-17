import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import CreateTripForm from '../components/CreateTripForm';

const CreateTripPage = () => (
  <Layout>
    <Header isPrivatePage withBackButton />

    <Main>
      <CreateTripForm />
    </Main>
  </Layout>
);

export default CreateTripPage;
