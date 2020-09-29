import React from 'react';
import {
  Text, Flex, IconButton, Icon,
} from '@chakra-ui/core';
import api from '../services/api';
import axiosErrorHandler from '../utils/axiosErrorHandler';

const CandidateItem = ({ candidate, tripId, approved }) => {
  const handleApproval = async (candidateId, approve) => {
    try {
      await api.put(`/trips/${tripId}/candidates/${candidateId}/decide`, { approve });
    } catch (error) {
      axiosErrorHandler(error);
    }
  };

  return (
    <>
      <Text>{candidate.name}</Text>
      <Text>{candidate.applicationText}</Text>
      <Text>{candidate.age}</Text>
      <Text>{candidate.country}</Text>
      <Text>{candidate.profession}</Text>
      {
      approved
        ? <Icon name="check" size="24px" color="green.500" />
        : (
          <Flex
            justifySelf="stretch"
            alignItems="center"
          >
            <IconButton
              variantColor="green"
              icon="check"
              size="sm"
              onClick={() => handleApproval(candidate.id, true)}
            />
            <IconButton
              variantColor="red"
              ml={3}
              icon="delete"
              size="sm"
              onClick={() => handleApproval(candidate.id, false)}
            />
          </Flex>
        )
    }

    </>
  );
};
export default CandidateItem;
