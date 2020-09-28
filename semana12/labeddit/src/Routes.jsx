import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PostPage from './pages/PostPage';
import FeedPage from './pages/FeedPage';

const loggedIn = false;

const Routes = () => {
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
          <LoginPage />
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
