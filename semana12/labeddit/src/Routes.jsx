import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

const loggedIn = true;

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/post/:id">
        <div>Post Page</div>
      </Route>
      <Route path="/login">
        <div>Login Page</div>
      </Route>
      <Route path="/signup">
        <div>Signup Page</div>
      </Route>
      <Route path="/feed">
        <div>Feed Page</div>
      </Route>
      <Router path="/">
        {loggedIn ? <Redirect to="/feed" /> : <Redirect to="/login" />}
      </Router>
    </Switch>
  </Router>

);

export default Routes;
