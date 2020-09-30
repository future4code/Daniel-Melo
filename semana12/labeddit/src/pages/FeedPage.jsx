import React, { useState } from 'react';
import { ButtonGroup, Button } from '@chakra-ui/core';
import Layout from '../components/Layout';
import Header from '../components/Header';
import CreatePostForm from '../components/CreatePostForm';
import PostsList from '../components/PostsList';
import { usePosts } from '../contexts/PostsProvider';

const FeedPage = () => {
  const { updatePosts } = usePosts();
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateFeed = async () => {
    setIsLoading(true);
    await updatePosts();
    setIsLoading(false);
  };

  return (
    <Layout>
      <Header />
      <ButtonGroup>
        <CreatePostForm />
        <Button
          isLoading={isLoading}
          onClick={handleUpdateFeed}
          variant="outline"
          colorScheme="blue"
        >
          Atualizar feed
        </Button>
      </ButtonGroup>
      <PostsList />
    </Layout>
  );
};

export default FeedPage;
