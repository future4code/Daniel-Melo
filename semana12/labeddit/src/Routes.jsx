import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { useAuth } from './contexts/AuthProvider';
import AuthPage from './pages/AuthPage';
import PostPage from './pages/PostPage';
import FeedPage from './pages/FeedPage';

const Routes = () => {
  const { user } = useAuth();

  const PrivateRoute = ({ children, path }) => (
    <Route path={path}>
      {user ? children : <Redirect to="/auth" />}
    </Route>
  );

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/post/:id">
          <PostPage />
        </PrivateRoute>
        <Route path="/auth">
          {user ? <Redirect to="/feed" /> : <AuthPage />}
        </Route>
        <PrivateRoute path="/feed">
          <FeedPage />
        </PrivateRoute>
        <Redirect from="/" to="/feed" />
      </Switch>
    </Router>

  );
};
export default Routes;
