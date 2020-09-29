import React from 'react';
import {
  Grid, Heading,
} from '@chakra-ui/core';
import CandidateItem from './CandidateItem';

const CandidateList = ({ candidates, approveds, tripId }) => (
  <Grid
    templateColumns="1fr 2fr repeat(4,1fr)"
    gap={8}
    mt={8}
    mb={8}
  >
    <Heading
      as="h3"
      size="md"
      gridColumn="span 6"
      color="purple.500"
    >
      Candidates
    </Heading>

    <Heading as="h3" size="sm" color="yellow.500">Nome</Heading>
    <Heading as="h3" size="sm" color="yellow.500">Apresentação</Heading>
    <Heading as="h3" size="sm" color="yellow.500">Idade</Heading>
    <Heading as="h3" size="sm" color="yellow.500">País</Heading>
    <Heading as="h3" size="sm" color="yellow.500">Profissão</Heading>
    <Heading as="h3" size="sm" color="yellow.500">Aprovação</Heading>

    {
        candidates
        && candidates.map((candidate) => (
          <CandidateItem key={candidate.id} candidate={candidate} tripId={tripId} />
        ))
      }

    {
        approveds
        && approveds.map((candidate) => (
          <CandidateItem key={candidate.id} candidate={candidate} approved />
        ))
      }
  </Grid>
);

export default CandidateList;
