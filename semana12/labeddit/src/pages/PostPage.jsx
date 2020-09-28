import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const params = useParams();

  return (
    <div>
      PostPage
      {' '}
      {params.id}
    </div>
  );
};

export default PostPage;
