import React from 'react';
import {
  VStack, Text, Heading, HStack,
} from '@chakra-ui/core';
import { ChatIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import VoteCounter from './VoteCounter';

const Post = ({ post }) => (
  <VStack
    as="article"
    align="flex-start"
    p={4}
    mt={4}
    boxShadow="0px 0px 5px 1px rgba(0,0,0,0.25)"
    borderRadius={8}
  >
    <Heading size="lg">
      <Link to={`/post/${post.id}`}>
        {post.title}
      </Link>
    </Heading>
    <Text color="gray.500">{post.username}</Text>
    <Text>{post.text}</Text>

    <HStack alignSelf="stretch" justify="space-between">
      <VoteCounter
        voteDirection={post.userVoteDirection}
        votesCount={post.votesCount}
      />

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
