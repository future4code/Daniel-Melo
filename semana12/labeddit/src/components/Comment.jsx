import React, { useState } from 'react';
import {
  VStack, Text,
} from '@chakra-ui/core';
import VoteCounter from './VoteCounter';

const Comment = ({ comment, handleVote }) => {
  const [isLoading, setIsLoading] = useState(false);
  const createdAt = new Date(comment.createdAt);

  const onVote = async (direction) => {
    setIsLoading(true);
    await handleVote(comment.id, direction);
    setIsLoading(false);
  };

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
        isLoading={isLoading}
        voteDirection={comment.userVoteDirection}
        votesCount={comment.votesCount}
        onVoteUp={() => onVote(1)}
        onVoteDown={() => onVote(-1)}
      />
    </VStack>
  );
};
export default Comment;
