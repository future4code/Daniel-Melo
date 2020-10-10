import React from 'react';
import AuthProvider from './contexts/AuthProvider';
import FilterProvider from './contexts/FilterProvider';
import PostsProvider from './contexts/PostsProvider';
import Routes from './Routes';

const App = () => (
  <AuthProvider>
    <FilterProvider>
      <PostsProvider>
        <Routes />
      </PostsProvider>
    </FilterProvider>
  </AuthProvider>
);

export default App;
