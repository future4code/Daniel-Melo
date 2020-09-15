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