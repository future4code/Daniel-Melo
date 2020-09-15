import React from 'react';
import { Heading, Flex, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom'


const TripDetailsPage = () => {
  return (
    <Flex justify="space-between">
      <Heading>
        TripDetailsPage
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
    </Flex>
  );
};

export default TripDetailsPage;