import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ApplicationFormPage from './pages/ApplicationFormPage'
import LoginPage from './pages/LoginPage'
import ListTripPage from './pages/ListTripPage'
import TripDetailsPage from './pages/TripDetailsPage'
import CreateTripPage from './pages/CreateTripPage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/trip/details'>
          <TripDetailsPage />
        </Route>
        <Route path='/trip/list'>
          <ListTripPage />
        </Route>
        <Route path='/trip/create'>
          <CreateTripPage />
        </Route>
        <Route path='/application-form'>
          <ApplicationFormPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;