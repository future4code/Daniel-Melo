import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import CreatePostForm from '../components/CreatePostForm';
import PostsList from '../components/PostsList';

const FeedPage = () => (
  <Layout>
    <Header />
    <CreatePostForm />
    <PostsList />
  </Layout>
);

export default FeedPage;
