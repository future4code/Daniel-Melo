import React from 'react';
import { Flex } from '@chakra-ui/core';

const Layout = ({ children }) => (
  <Flex
    direction="column"
    align="center"
    minHeight="100vh"
  >
    { children }
  </Flex>
);

export default Layout;
