import React from 'react';
import {
  Heading, Button, Flex, Image, Text,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import welcomeText from '../utils/welcomeText';
import rocketImage from '../assets/img/outer_space.svg';

const HomePage = () => (
  <Layout>
    <Header />

    <Main row>
      <Flex
        direction="column"
        align={{ base: 'center', lg: 'flex-start' }}
        w={470}
      >
        <Heading color="purple.500" as="h1" mb="8">
          Bem-vinde à
          <Text color="yellow.500" display="inline"> Labe</Text>
          X
        </Heading>

        <Text textAlign={{ base: 'center', lg: 'start' }}>
          {welcomeText}
        </Text>

        <Link to="/application-form">
          <Button mt={8} size="lg" variantColor="yellow">
            APLICAR PARA VIAJAR
          </Button>
        </Link>
      </Flex>

      <Image display={{ base: 'none', lg: 'block' }} src={rocketImage} logo="Rocket" maxWidth="600px" />
    </Main>
  </Layout>
);

export default HomePage;
