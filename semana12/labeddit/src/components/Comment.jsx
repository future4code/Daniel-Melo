import React from 'react';
import {
  VStack, Text,
} from '@chakra-ui/core';
import VoteCounter from './VoteCounter';

const Comment = ({ comment }) => (
  <VStack
    as="article"
    align="flex-start"
    p={4}
    mt={4}
    boxShadow="0px 0px 5px 1px rgba(0,0,0,0.25)"
    borderRadius={8}
  >
    <Text color="gray.500">{comment.username}</Text>
    <Text>{comment.text}</Text>

    <VoteCounter
      voteDirection={comment.userVoteDirection}
      votesCount={comment.votesCount}
    />
  </VStack>
);

export default Comment;
