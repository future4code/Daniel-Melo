import React from 'react';
import AuthProvider from './contexts/AuthProvider';
import PostsProvider from './contexts/PostsProvider';
import Routes from './Routes';

const App = () => (
  <AuthProvider>
    <PostsProvider>
      <Routes />
    </PostsProvider>
  </AuthProvider>
);

export default App;
