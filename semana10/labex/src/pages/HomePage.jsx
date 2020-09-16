import React from 'react';
import {
  Heading, Button, Flex, Image, Text,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Header from '../components/Header';
import welcomeText from '../utils/welcomeText';
import rocketImage from '../assets/img/outer_space.svg';

const HomePage = () => (
  <Layout>
    <Header />

    <Flex
      as="main"
      flexGrow={1}
      align="center"
      justify={{ base: 'center', lg: 'space-between' }}
      px={{ xl: 0, base: 15 }}
      w={{ xl: '1170px', base: '100%' }}
    >
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

    </Flex>
  </Layout>
);

export default HomePage;
