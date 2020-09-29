import React from 'react';
import { Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const TripItem = ({ trip }) => (
  <>
    <Link to={`/trip/details/${trip.id}`}>
      <Text>{trip.name}</Text>
    </Link>
    <Text>{trip.description}</Text>
    <Text>{trip.planet}</Text>
    <Text>
      {trip.durationInDays}
      {' '}
      dias
    </Text>
    <Text>{trip.date}</Text>
  </>
);

export default TripItem;
