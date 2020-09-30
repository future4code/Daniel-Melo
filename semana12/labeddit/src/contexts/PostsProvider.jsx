import React, {
  useState, useContext, createContext,
} from 'react';
import { useToast } from '@chakra-ui/core';
import api from '../services/api';

const PostContext = createContext();

const PostsProvider = ({ children }) => {
  const toast = useToast();
  const [posts, setPosts] = useState([]);

  const showErrorToast = () => {
    toast({
      title: 'Erro na requisição',
      status: 'error',
      position: 'top',
      duration: 2000,
      isClosable: true,
    });
  };

  const updatePosts = async () => {
    try {
      const { data } = await api.get('/posts');
      setPosts(data.posts);
    } catch (error) {
      showErrorToast();
    }
  };

  const createPost = async (data) => {
    try {
      await api.post('/posts', data);
      await updatePosts();
    } catch (error) {
      showErrorToast();
    }
  };

  const votePost = async (postId, direction) => {
    try {
      await api.put(`/posts/${postId}/vote`, { direction });
      await updatePosts();
    } catch (error) {
      showErrorToast();
    }
  };

  return (
    <PostContext.Provider value={{
      posts, updatePosts, createPost, votePost,
    }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);

export default PostsProvider;
