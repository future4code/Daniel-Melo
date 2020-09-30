import { HStack, Input, IconButton } from '@chakra-ui/core';
import { CheckIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import api from '../services/api';

const CreateCommentForm = ({ postId, onCreate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const sendComment = async () => {
    setIsLoading(true);

    try {
      await api.post(`/posts/${postId}/comment`, { text: comment });
      onCreate();
    } catch (error) {
      console.log(error);
    }

    setComment('');
    setIsLoading(false);
  };

  return (
    <HStack
      mt={4}
    >
      <Input
        id="comment"
        type="text"
        placeholder="Novo comentário"
        value={comment}
        onChange={handleChange}
      />
      <IconButton
        isLoading={isLoading}
        onClick={sendComment}
        colorScheme="blue"
        icon={<CheckIcon />}
      />
    </HStack>
  );
};

export default CreateCommentForm;
