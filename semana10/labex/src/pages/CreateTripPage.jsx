import React from 'react';
import { Heading, Flex, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CreateTripPage = () => {
  const { logout } = useAuth();

  return (
    <Flex justify="space-between">
      <Heading>
        CreateTripPage
      </Heading>

      <Link to="/trip/list">
        <Button variantColor="yellow">
          VOLTAR
        </Button>
      </Link>

      <Button variantColor="purple" onClick={logout}>
        SAIR
      </Button>

      <Button variantColor="yellow">
        Criar Viagem
      </Button>

    </Flex>
  );
};

export default CreateTripPage;
