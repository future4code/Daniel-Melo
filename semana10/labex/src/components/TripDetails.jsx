import React from 'react';
import { Stack, Text } from '@chakra-ui/core';

const TripDetails = ({ gridArea, trip }) => (
  <Stack gridArea={gridArea}>
    <Text color="yellow.500">
      Descrição:
      {' '}
      <Text as="span" color="white">{trip.description}</Text>
    </Text>
    <Text color="yellow.500">
      Destino:
      {' '}
      <Text as="span" color="white">{trip.planet}</Text>
    </Text>
    <Text color="yellow.500">
      Data:
      {' '}
      <Text as="span" color="white">{trip.date}</Text>
    </Text>
    <Text color="yellow.500">
      Duração em dias:
      {' '}
      <Text as="span" color="white">{trip.durationInDays}</Text>
    </Text>
  </Stack>
);

export default TripDetails;
