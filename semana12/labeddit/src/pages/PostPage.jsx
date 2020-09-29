import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Post from '../components/Post';
import CommentList from '../components/CommentList';
import CreateCommentForm from '../components/CreateCommentForm';

const post = {
  comments: [
    {
      userVoteDirection: 1,
      id: '8A9cABbO590XXNqqvO9L',
      text: 'asdasdasda',
      createdAt: 1596837544084,
      username: 'hyago',
      votesCount: 0,
    },
    {
      userVoteDirection: -1,
      id: '99kSphGsVA3Bi6OPK9RQ',
      text: 'dasdas',
      createdAt: 1600710229335,
      username: 'astro',
      votesCount: 0,
    },
    {
      userVoteDirection: 0,
      id: '9tBUQdMlPD21bWr0lQVw',
      createdAt: 1600724982988,
      username: 'camila.moura',
      votesCount: 0,
      text: 'Oi',
    },
  ],
  userVoteDirection: 0,
  id: '0m0ePGTzmgHWoofVSQ6k',
  commentsCount: 16,
  username: 'Octavio',
  votesCount: 2,
  title: 'teste de usuario',
  createdAt: 1596761094771,
  text: 'teste de usuario',
};

const PostPage = () => (
  <Layout>
    <Header />
    <Post post={post} />
    <CreateCommentForm />
    <CommentList comments={post.comments} />
  </Layout>
);

export default PostPage;
