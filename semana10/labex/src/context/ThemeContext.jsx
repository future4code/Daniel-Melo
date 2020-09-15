import React from 'react';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';

const ThemeContext = ({ children }) => (
  <ThemeProvider>
    <ColorModeProvider value="dark">
      <CSSReset />
      {children}
    </ColorModeProvider>
  </ThemeProvider>
);

export default ThemeContext;
