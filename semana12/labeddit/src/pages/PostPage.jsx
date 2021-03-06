import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, useToast } from '@chakra-ui/core';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Post from '../components/Post';
import CommentList from '../components/CommentList';
import CreateCommentForm from '../components/CreateCommentForm';
import api from '../services/api';

const PostPage = () => {
  const toast = useToast();
  const { id } = useParams();
  const [post, setPost] = useState({
    comments: [],
  });

  const showErrorMessage = () => {
    toast({
      title: 'Erro na requisição',
      status: 'error',
      position: 'top',
      duration: 2000,
      isClosable: true,
    });
  };

  const getPostDetail = async () => {
    try {
      const { data } = await api.get(`/posts/${id}`);
      setPost(data.post);
    } catch (error) {
      showErrorMessage();
    }
  };

  useEffect(() => {
    getPostDetail();
  }, []);

  const handleVote = async (commentId, direction) => {
    const currentComment = post.comments.find((comment) => comment.id === commentId);

    try {
      if (direction === currentComment.userVoteDirection) {
        await api.put(`/posts/${post.id}/comment/${commentId}/vote`, { direction: 0 });
      } else {
        await api.put(`/posts/${post.id}/comment/${commentId}/vote`, { direction });
      }

      await getPostDetail();
    } catch (error) {
      showErrorMessage();
    }
  };

  const orderCommentsByDate = () => [...post.comments].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <Layout>
      <Header />
      {
        post.id
          ? (
            <>
              <Post post={post} />
              <CreateCommentForm postId={post.id} onCreate={getPostDetail} />
              <CommentList
                handleVote={handleVote}
                comments={orderCommentsByDate()}
              />
            </>
          )
          : <CircularProgress isIndeterminate mt={4} alignSelf="center" color="blue.500" />
      }
    </Layout>
  );
};

export default PostPage;
