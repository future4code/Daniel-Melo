import React from 'react';
import { VStack } from '@chakra-ui/core';
import Post from './Post';

const posts = [
  {
    userVoteDirection: 0,
    id: '0m0ePGTzmgHWoofVSQ6k',
    text: 'teste de usuario',
    username: 'Octavio',
    title: 'teste de usuario',
    createdAt: 1596761094771,
    votesCount: 4,
    commentsCount: 16,
  },
  {
    userVoteDirection: 1,
    id: '1GFE4998p0P3I0gAXcto',
    createdAt: 1596835818009,
    commentsCount: 5,
    text: "Cat ipsum dolor sit amet, show belly. What a cat-ass-trophy! fat baby cat best buddy little guy mark territory intently stare at the same spot, and flex claws on the human's belly and purr like a lawnmower.",
    votesCount: 1,
    username: 'bananinha',
    title: 'Always hungry',
  },
  {
    userVoteDirection: -1,
    id: '1VetE7kBui8ELP0rzTU5',
    votesCount: -1,
    commentsCount: 0,
    username: 'diego-m',
    createdAt: 1597969363031,
    text: 'Post teste',
    title: "post teste '1",
  },
  {
    userVoteDirection: 1,
    id: '1Z0fStsznp3RPvPGHJVV',
    createdAt: 1596665332023,
    commentsCount: 22,
    title: 'Hmmm... Bem bolada, talvez?',
    votesCount: 10,
    username: 'diego-m',
    text: 'Havia dois caminhões voando. Um Caiu. Por que ou outro continuou voando? PORQUE ERA UMA CAMINHÃO-PIPA. HAUAHAAHAUAH ',
  },
];

const PostsList = () => (
  <VStack
    align="stretch"
    spacing={4}
  >
    {posts.map((post) => <Post post={post} key={post.id} />)}
  </VStack>
);

export default PostsList;
