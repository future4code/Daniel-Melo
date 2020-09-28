import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { useAuth } from './context/AuthProvider';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PostPage from './pages/PostPage';
import FeedPage from './pages/FeedPage';

const Routes = () => {
  const { loggedIn } = useAuth();

  const PrivateRoute = ({ children, path }) => (
    <Route path={path}>
      {loggedIn ? children : <Redirect to="/login" />}
    </Route>
  );

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/post/:id">
          <PostPage />
        </PrivateRoute>
        <Route path="/login">
          {loggedIn ? <Redirect to="/feed" /> : <LoginPage />}
        </Route>
        <Route path="/signup">
          <SignupPage />
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
