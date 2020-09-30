import React from 'react';
import {
  VStack, Text,
} from '@chakra-ui/core';
import VoteCounter from './VoteCounter';

const Comment = ({ comment }) => {
  const createdAt = new Date(comment.createdAt);

  return (
    <VStack
      as="article"
      align="flex-start"
      p={4}
      mt={4}
      boxShadow="0px 0px 5px 1px rgba(0,0,0,0.25)"
      borderRadius={8}
    >
      <Text color="gray.500">{`${comment.username} - ${createdAt.toLocaleString('pt-BR')}`}</Text>
      <Text>{comment.text}</Text>

      <VoteCounter
        voteDirection={comment.userVoteDirection}
        votesCount={comment.votesCount}
      />
    </VStack>
  );
};
export default Comment;
