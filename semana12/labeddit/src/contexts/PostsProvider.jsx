import React, {
  useState, useContext, createContext,
} from 'react';
import api from '../services/api';

const PostContext = createContext();

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const updatePosts = async () => {
    try {
      const { data } = await api.get('/posts');
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async (data) => {
    try {
      await api.post('/posts', data);
      await updatePosts();
    } catch (error) {
      console.log(error);
    }
  };

  const votePost = async (postId, direction) => {
    try {
      await api.put(`/posts/${postId}/vote`, { direction });
      await updatePosts();
    } catch (error) {
      console.log(error);
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
