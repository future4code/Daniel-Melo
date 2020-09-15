import React from 'react';
import ThemeContext from './context/ThemeContext'
import { Heading } from '@chakra-ui/core'

function App() {
  return (
    <ThemeContext>
      <Heading size='sm'>Hello, world</Heading>
    </ThemeContext>
  );
}

export default App;
