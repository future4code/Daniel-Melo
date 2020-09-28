import React from 'react';
import { ChakraProvider } from '@chakra-ui/core';

const ThemeProvider = ({ children }) => (
  <ChakraProvider resetCSS>
    {children}
  </ChakraProvider>
);

export default ThemeProvider;
