import React from 'react';

import { GlobalStyle } from './styles/GlobalStyle'

import Layout from './components/Layout'

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout />
    </React.Fragment>
  );
}

export default App;
