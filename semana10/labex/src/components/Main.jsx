import React from 'react';
import { Flex } from '@chakra-ui/core';

const Main = ({ column, children }) => (
  <Flex
    as="main"
    direction={column ? 'column' : 'row'}
    flexGrow={1}
    align="center"
    justify={column ? 'flex-start' : { base: 'center', lg: 'space-between' }}
    px={{ xl: 0, base: 15 }}
    w={{ xl: '1170px', base: '100%' }}
  >
    {children}
  </Flex>
);

export default Main;
