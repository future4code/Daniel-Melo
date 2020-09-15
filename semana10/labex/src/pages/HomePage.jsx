import React from 'react';
import { Heading, Button, Flex } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <Flex
    justify="space-between"
  >
    <Heading>
      HomePage
    </Heading>

    <Flex>
      <Link to="/login">
        <Button size="md" variantColor="purple" variant="outline">
          ADMIN
        </Button>
      </Link>

      <Link to="/application-form">
        <Button size="lg" variantColor="yellow">
          APLICAR PARA VIAJAR
        </Button>
      </Link>
    </Flex>
  </Flex>
);

export default HomePage;
