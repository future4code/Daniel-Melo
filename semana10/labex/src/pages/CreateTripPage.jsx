import React from 'react';
import { Heading, Flex, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom'

const CreateTripPage = () => {
  return (
    <Flex justify='space-between'>
      <Heading>
        CreateTripPage
      </Heading>

      <Link to='/trip/list'>
        <Button variantColor='yellow'>
          VOLTAR
        </Button>
      </Link>
      
      <Link to='/'>
        <Button variantColor='purple'>
          SAIR
        </Button>
      </Link>

      <Button variantColor="yellow">
        Criar Viagem
      </Button>

      

    </Flex>
  );
};

export default CreateTripPage;