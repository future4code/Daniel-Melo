import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import HomePage from './pages/HomePage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import LoginPage from './pages/LoginPage';
import ListTripPage from './pages/ListTripPage';
import TripDetailsPage from './pages/TripDetailsPage';
import CreateTripPage from './pages/CreateTripPage';

const Routes = () => {
  const { isAuthorized } = useAuth();

  const PrivateRoute = ({ children, path }) => (
    <Route
      path={path}
    >
      {
        isAuthorized
          ? children
          : <Redirect to="/login" />
      }
    </Route>
  );

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/trip/details/:id">
          <TripDetailsPage />
        </PrivateRoute>
        <PrivateRoute path="/trip/list">
          <ListTripPage />
        </PrivateRoute>
        <PrivateRoute path="/trip/create">
          <CreateTripPage />
        </PrivateRoute>
        <Route path="/application-form">
          <ApplicationFormPage />
        </Route>
        <Route path="/login">
          {isAuthorized ? <Redirect to="/trip/list" /> : <LoginPage />}
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
