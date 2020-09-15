import React from 'react';
import { useAuth } from '../context/AuthContext'
import { Heading, Flex, Button, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom'

const ListTripPage = () => {
  const { logout } = useAuth()

  return (
    <Flex justify="space-between">
      <Heading>
        ListTripPage
      </Heading>

      <Button variantColor='purple' onClick={logout}>
        SAIR
      </Button>

      <Link to='/trip/details/1'>
        <Text>Detalhes da Viagem 1</Text>
      </Link>
      <Link to='/trip/details/2'>
        <Text>Detalhes da Viagem 2</Text>
      </Link>
      <Link to='/trip/details/3'>
        <Text>Detalhes da Viagem 3</Text>
      </Link>
      <Link to='/trip/details/4'>
        <Text>Detalhes da Viagem 4</Text>
      </Link>

      <Link to='/trip/create'>
        <Button variantColor='yellow'>
          Criar Nova Viagem
        </Button>
      </Link>
    </Flex>
  );
};

export default ListTripPage;