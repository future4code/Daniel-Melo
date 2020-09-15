import React from 'react';
import { Heading, Flex, Button, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom'

const ListTripPage = () => {
  return (
    <Flex justify="space-between">
      <Heading>
        ListTripPage
      </Heading>

      <Link to='/'>
        <Button variantColor='purple'>
          SAIR
        </Button>
      </Link>

      <Link to='/trip/details'>
        <Text>Detalhes da Viagem</Text>
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