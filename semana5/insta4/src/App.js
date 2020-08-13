import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'daniel'}
          fotoUsuario={'https://picsum.photos/51/51'}
          fotoPost={'https://picsum.photos/201/151'}
        />
        <Post
          nomeUsuario={'simone'}
          fotoUsuario={'https://picsum.photos/52/52'}
          fotoPost={'https://picsum.photos/202/152'}
        />
      </div>
    );
  }
}

export default App;
