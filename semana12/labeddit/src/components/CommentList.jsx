import React from 'react';
import { VStack } from '@chakra-ui/core';
import Comment from './Comment';

const CommentList = ({ comments, handleVote }) => (
  <VStack
    align="stretch"
    spacing={4}
  >
    {comments.map((comment) => (
      <Comment
        key={comment.id}
        comment={comment}
        handleVote={handleVote}
      />
    ))}
  </VStack>
);

export default CommentList;
