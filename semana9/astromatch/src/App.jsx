import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'

import ThemeContext from './context/ThemeContext'

import Box from '@material-ui/core/Box'
import Layout from './components/Layout'


function App() {
  return (
    <ThemeContext>
      <CssBaseline />
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Layout />
      </Box>
    </ThemeContext>
  );
}

export default App;
