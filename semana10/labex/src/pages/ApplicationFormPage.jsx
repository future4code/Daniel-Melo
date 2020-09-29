import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import ApplicationForm from '../components/ApplicationForm';

const ApplicationFormPage = () => (
  <Layout>
    <Header />

    <Main>
      <PageTitle title="Formulário de Aplicação" />
      <ApplicationForm />
    </Main>
  </Layout>
);

export default ApplicationFormPage;
