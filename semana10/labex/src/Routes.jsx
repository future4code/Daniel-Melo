import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ApplicationFormPage from './pages/ApplicationFormPage'
import LoginPage from './pages/LoginPage'
import ListTripPage from './pages/ListTripPage'
import TripDetailsPage from './pages/TripDetailsPage'
import CreateTripPage from './pages/CreateTripPage'

const isAuthenticated = true

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
    >
      {
      isAuthenticated
        ? children
        : <Redirect to="/login" />}
    </Route>
  )
}

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path='/trip/details/:id'>
          <TripDetailsPage />
        </PrivateRoute>
        <PrivateRoute path='/trip/list'>
          <ListTripPage />
        </PrivateRoute>
        <PrivateRoute path='/trip/create'>
          <CreateTripPage />
        </PrivateRoute>
        <Route path='/application-form'>
          <ApplicationFormPage />
        </Route>
        <Route path='/login'>
          {isAuthenticated ? <Redirect to="/trip/list" /> : <LoginPage />}
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;