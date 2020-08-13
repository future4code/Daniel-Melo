import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'
import {SocialMedia} from '../SocialMedia/SocialMedia'

import iconeCompartilhar from '../../img/share.svg'
import iconeBandeiraBranca from '../../img/outlined_flag-24px.svg'
import iconeBandeiraPreta from '../../img/flag-24px.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;

  & > img {
    width: 100%
  }
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  & > img {
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;  
  }
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  font-size: 0.8rem;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhando: false,
    comentario: '',
    comentarios: []
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.curtido
        ? this.state.numeroCurtidas - 1
        : this.state.numeroCurtidas + 1
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickBandeira = () => {
    this.setState({
      marcado: !this.state.marcado
    })
  }

  onClickShare = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  onChangeComentario = (event) => {
    this.setState({ comentario: event.target.value})
  }

  aoEnviarComentario = () => {
    const comentarios = [ this.state.comentario, ...this.state.comentarios ]
    
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      comentarios,
      comentario: ''
    })
  }

  render() {
    let iconeCurtida
    let iconeBandeira

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }
    
    if(this.state.marcado) {
      iconeBandeira = iconeBandeiraPreta
    } else {
      iconeBandeira = iconeBandeiraBranca
    }

    let componenteComentario
    let componenteCompartilhar

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario comentario={this.state.comentario} aoEnviar={this.aoEnviarComentario} aoMudar={this.onChangeComentario}/>
    }

    if(this.state.compartilhando) {
      componenteCompartilhar = <SocialMedia></SocialMedia>
    }

    return <PostContainer>
      <PostHeader>
        <img src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <img src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        
        <IconeSemContador
          icone={iconeBandeira}
          onClickIcone={this.onClickBandeira}
        />
        
        <IconeSemContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickShare}
        />
      </PostFooter>

        {componenteComentario}
        {componenteCompartilhar}
      
      <CommentsContainer>
        {this.state.comentarios.map((comentario, i) => (
          <p key={i}>{comentario}</p>
        ))}
      </CommentsContainer>
    </PostContainer>
  }
}

export default Post