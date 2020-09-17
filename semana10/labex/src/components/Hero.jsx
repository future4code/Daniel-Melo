import React from 'react';
import {
  Heading, Button, Flex, Image, Text,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import welcomeText from '../utils/welcomeText';
import rocketImage from '../assets/img/outer_space.svg';

const Hero = () => (
  <>
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
  </>
);

export default Hero;
