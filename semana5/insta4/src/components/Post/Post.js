import React from 'react'
import './Post.css'

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

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhando: false
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

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
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
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    if(this.state.compartilhando) {
      componenteCompartilhar = <SocialMedia></SocialMedia>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
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
      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  }
}

export default Post