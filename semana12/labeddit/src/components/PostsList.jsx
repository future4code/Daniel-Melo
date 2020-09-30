import React, { useEffect } from 'react';
import { VStack, CircularProgress } from '@chakra-ui/core';
import { usePosts } from '../contexts/PostsProvider';
import Post from './Post';

const PostsList = () => {
  const { posts, updatePosts } = usePosts();

  const postsByDate = () => {
    const newPosts = [...posts].sort((a, b) => b.createdAt - a.createdAt);
    return newPosts;
  };

  useEffect(() => {
    updatePosts();
  }, []);

  return (
    <VStack
      align="stretch"
      spacing={4}
    >
      {
      posts.length === 0
        ? <CircularProgress isIndeterminate mt={4} alignSelf="center" color="blue.500" />
        : postsByDate().map((post) => <Post post={post} key={post.id} />)
      }
    </VStack>
  );
};

export default PostsList;
