import React from 'react';
import ThemeContext from './context/ThemeContext'
import Routes from './Routes'
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ThemeContext>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeContext>
  );
}

export default App;
