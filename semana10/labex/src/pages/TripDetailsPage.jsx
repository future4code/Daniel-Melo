import React from 'react';
import { useAuth } from '../context/AuthContext'
import { Heading, Flex, Button } from '@chakra-ui/core';
import { Link, useParams } from 'react-router-dom'


const TripDetailsPage = () => {
  const { id } = useParams()
  const { logout } = useAuth()

  return (
    <Flex justify="space-between">
      <Heading>
        TripDetailsPage {id}
      </Heading>

      <Link to='/trip/list'>
        <Button variantColor='yellow'>
          VOLTAR
        </Button>
      </Link>
      
      <Button variantColor='purple' onClick={logout}>
        SAIR
      </Button>
    </Flex>
  );
};

export default TripDetailsPage;