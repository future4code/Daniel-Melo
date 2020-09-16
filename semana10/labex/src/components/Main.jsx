import React from 'react';
import { Flex } from '@chakra-ui/core';

const Main = ({ row, children }) => (
  <Flex
    as="main"
    direction={row ? 'row' : 'column'}
    flexGrow={1}
    align="center"
    justify={row ? { base: 'center', lg: 'space-between' } : 'flex-start'}
    pt={row ? 0 : 16}
    px={{ xl: 0, base: 15 }}
    w={{ xl: '1170px', base: '100%' }}
  >
    {children}
  </Flex>
);

export default Main;
