import React, { useState } from 'react';
import {
  VStack, Text, Heading, HStack,
} from '@chakra-ui/core';
import { ChatIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import VoteCounter from './VoteCounter';
import { usePosts } from '../contexts/PostsProvider';

const Post = ({ post }) => {
  const createdAt = new Date(post.createdAt);
  const { votePost } = usePosts();
  const [isLoading, setIsLoading] = useState(false);

  const handleVote = async (direction) => {
    setIsLoading(true);

    if (direction === post.userVoteDirection) {
      await votePost(post.id, 0);
    } else {
      await votePost(post.id, direction);
    }

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
      <Heading size="md">
        <Link to={`/post/${post.id}`}>
          {post.title}
        </Link>
      </Heading>
      <Text fontSize="sm" color="gray.500">
        {`${post.username} - ${createdAt.toLocaleString('pt-BR')}`}
      </Text>
      <Text overflowWrap="anywhere">{post.text}</Text>

      <HStack alignSelf="stretch" justify="space-between">
        <VoteCounter
          isLoading={isLoading}
          voteDirection={post.userVoteDirection}
          votesCount={post.votesCount}
          onVoteUp={() => handleVote(1)}
          onVoteDown={() => handleVote(-1)}
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
};

export default Post;
