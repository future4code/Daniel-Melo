import React from 'react';
import {
  VStack, Text, Heading, HStack, IconButton,
} from '@chakra-ui/core';
import { ChatIcon, TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

const Post = ({ post }) => (
  <VStack
    as="article"
    align="flex-start"
    p={4}
    mt={4}
    boxShadow="0px 0px 5px 1px rgba(0,0,0,0.25)"
    borderRadius={8}
  >
    <Heading size="lg">{post.title}</Heading>
    <Text color="gray.500">{post.username}</Text>
    <Text>{post.text}</Text>

    <HStack alignSelf="stretch" justify="space-between">
      <HStack spacing={1}>
        <IconButton
          size="xs"
          icon={<TriangleUpIcon />}
          variant="ghost"
          color={post.userVoteDirection === 1 ? 'green.500' : 'gray.300'}
        />
        <Text>{post.votesCount}</Text>
        <IconButton
          size="xs"
          icon={<TriangleDownIcon />}
          variant="ghost"
          color={post.userVoteDirection === -1 ? 'red.500' : 'gray.300'}
        />
      </HStack>

      <HStack>
        <ChatIcon />
        <Text>
          {post.commentsCount}
        </Text>
      </HStack>
    </HStack>
  </VStack>
);

export default Post;
