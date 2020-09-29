import React, { useState, useEffect } from 'react';
import { VStack, CircularProgress } from '@chakra-ui/core';
import Post from './Post';
import api from '../services/api';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    try {
      const { data } = await api.get('/posts');
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  const postsByDate = () => {
    const newPosts = [...posts].sort((a, b) => b.createdAt - a.createdAt);
    return newPosts;
  };

  useEffect(() => {
    getPost();
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
