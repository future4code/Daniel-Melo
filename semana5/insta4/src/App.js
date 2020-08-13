import React from 'react';
import './App.css';
import Post from './components/Post/Post';

import styled from 'styled-components'

const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom:20px;

  * {
    margin: 5px;

  }
`


class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'daniel',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      },
      {
        nomeUsuario: 'simone',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
    ],
    inputNomeUsuario: '',
    inputFotoUsuario: '',
    inputFotoPost: ''
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({ inputNomeUsuario: event.target.value })
  }
  
  onChangeInputFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value })
  }
  
  onChangeInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value })
  }

  handlePostCreation = (event) => {
    event.preventDefault()

    const nomeUsuario = this.state.inputNomeUsuario
    const fotoUsuario = this.state.inputFotoUsuario
    const fotoPost = this.state.inputFotoPost
    
    const posts = [...this.state.posts, {nomeUsuario, fotoUsuario, fotoPost}]
    
    this.setState({
      posts,
      inputNomeUsuario: "",
      inputFotoUsuario: "",
      inputFotoPost: ""
    })
  }  

  render() {
    return (
      <div className={'app-container'}>
        <PostForm>
          <input
            type="text"
            placeholder="Nome do Usuário"
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            required
          />
          <input
            type="text"
            placeholder="Link para foto do usuário"
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            required
          />
          <input
            type="text"
            placeholder="Link para foto do post"
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            required
          />
          <button onClick={this.handlePostCreation}>Criar Post!</button>
        </PostForm>

        {this.state.posts.map((post, i) => (
          <Post
            key={i}
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
          />
        ))}
      </div>
    );
  }
}

export default App;
