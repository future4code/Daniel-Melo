import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import CreateTripForm from '../components/CreateTripForm';
import PageTitle from '../components/PageTitle';

const CreateTripPage = () => (
  <Layout>
    <Header isPrivatePage withBackButton />

    <Main>
      <PageTitle title="Criação de Nova Viagem" />
      <CreateTripForm />
    </Main>
  </Layout>
);

export default CreateTripPage;
