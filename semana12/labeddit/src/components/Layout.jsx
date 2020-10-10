import React from 'react';
import { Flex } from '@chakra-ui/core';

const Layout = ({ children }) => (
  <Flex
    direction="column"
    mx="auto"
    px={4}
    maxWidth="6xl"
  >
    {children}
  </Flex>
);

export default Layout;
