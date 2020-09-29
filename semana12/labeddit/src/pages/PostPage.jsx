import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const PostPage = () => {
  const params = useParams();

  return (
    <Layout>
      PostPage
      {' '}
      {params.id}
    </Layout>
  );
};

export default PostPage;
