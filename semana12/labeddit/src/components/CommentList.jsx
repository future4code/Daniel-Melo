import React from 'react';
import { VStack } from '@chakra-ui/core';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <VStack
    align="stretch"
    spacing={4}
  >
    {comments.map((comment) => <Comment comment={comment} key={comment.id} />)}
  </VStack>
);

export default CommentList;
