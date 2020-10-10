import React from 'react';
import {
  Text, HStack, IconButton,
} from '@chakra-ui/core';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

const VoteCounter = ({
  voteDirection, votesCount, onVoteUp, onVoteDown, isLoading,
}) => (
  <HStack spacing={1}>
    <IconButton
      isLoading={isLoading}
      size="xs"
      icon={<TriangleUpIcon />}
      variant="ghost"
      color={voteDirection === 1 || isLoading ? 'green.500' : 'gray.300'}
      onClick={onVoteUp}
    />
    <Text>{votesCount}</Text>
    <IconButton
      isLoading={isLoading}
      size="xs"
      icon={<TriangleDownIcon />}
      variant="ghost"
      color={voteDirection === -1 || isLoading ? 'red.500' : 'gray.300'}
      onClick={onVoteDown}
    />
  </HStack>
);

export default VoteCounter;
