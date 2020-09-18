import React, { useEffect, useState } from 'react';
import {
  Grid, Heading, Icon, Button,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import TripItem from './TripItem';
import api from '../services/api';
import axiosErrorHandler from '../utils/axiosErrorHandler';

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    api.get('/trips')
      .then(({ data }) => setTrips(data.trips))
      .catch(axiosErrorHandler);
  }, []);

  return (
    <>
      <Grid
        templateColumns="1fr 2fr repeat(3,1fr)"
        gap={8}
        mb={8}
      >
        <Link to="/trip/create" style={{ display: 'flex', gridColumn: 'span 5' }}>
          <Button
            size="sm"
            variantColor="yellow"
            variant="outline"
            aria-label="criar nova viagem"
            icon="add"
            flexGrow={1}
          >
            <Icon name="add" mr={3} />
            CRIAR NOVA VIAGEM
          </Button>
        </Link>

        <Heading as="h3" size="sm" color="yellow.500">Nome</Heading>
        <Heading as="h3" size="sm" color="yellow.500">Descrição</Heading>
        <Heading as="h3" size="sm" color="yellow.500">Destino</Heading>
        <Heading as="h3" size="sm" color="yellow.500">Duração</Heading>
        <Heading as="h3" size="sm" color="yellow.500">Data</Heading>

        {trips.map((trip) => <TripItem key={trip.id} trip={trip} />)}
      </Grid>

      <Link to="/trip/create" />
    </>
  );
};

export default TripList;
