import React from 'react';
import { Heading, Flex, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const ApplicationFormPage = () => (
  <Flex
    justify="space-between"
  >
    <Link to="/">
      <Heading>
        ApplicationFormPage
      </Heading>
    </Link>

    <Link to="/login">
      <Button size="md" variantColor="purple" variant="outline">
        ADMIN
      </Button>
    </Link>

    <Button size="lg" variantColor="yellow">
      FINALIZAR APLICAÇÃO
    </Button>
  </Flex>
);

export default ApplicationFormPage;
