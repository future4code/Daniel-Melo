import React from 'react';
import ThemeContext from './context/ThemeContext'
import Routes from './Routes'

function App() {
  return (
    <ThemeContext>
      <Routes />
    </ThemeContext>
  );
}

export default App;
