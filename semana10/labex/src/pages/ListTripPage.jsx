import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import TripList from '../components/TripList';

const ListTripPage = () => (
  <Layout>
    <Header isPrivatePage />

    <Main>
      <PageTitle title="Lista de Viagens" />
      <TripList />
    </Main>
  </Layout>
);

export default ListTripPage;
