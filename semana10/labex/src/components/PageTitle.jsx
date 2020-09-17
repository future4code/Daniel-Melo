import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/core';

const PageTitle = ({ title }) => (
  <Flex
    color="purple.500"
    direction="column"
    align="center"
    mb={8}
  >
    <Box
      w="70px"
      h="3px"
      bg="purple.500"
      mb={3}
      borderRadius="3px"
    />

    <Heading size="lg">{title}</Heading>
  </Flex>
);

export default PageTitle;
