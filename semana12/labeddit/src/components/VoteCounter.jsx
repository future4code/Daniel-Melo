import React from 'react';
import {
  Text, HStack, IconButton,
} from '@chakra-ui/core';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

const VoteCounter = ({ voteDirection, votesCount }) => (
  <HStack spacing={1}>
    <IconButton
      size="xs"
      icon={<TriangleUpIcon />}
      variant="ghost"
      color={voteDirection === 1 ? 'green.500' : 'gray.300'}
    />
    <Text>{votesCount}</Text>
    <IconButton
      size="xs"
      icon={<TriangleDownIcon />}
      variant="ghost"
      color={voteDirection === -1 ? 'red.500' : 'gray.300'}
    />
  </HStack>
);

export default VoteCounter;
