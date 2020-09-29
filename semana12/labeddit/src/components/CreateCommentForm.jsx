import { HStack, Input, IconButton } from '@chakra-ui/core';
import { CheckIcon } from '@chakra-ui/icons';
import React from 'react';

const CreateCommentForm = () => (
  <HStack
    mt={4}
  >
    <Input type="text" placeholder="Novo comentário" />
    <IconButton colorScheme="blue" icon={<CheckIcon />} />
  </HStack>
);

export default CreateCommentForm;
