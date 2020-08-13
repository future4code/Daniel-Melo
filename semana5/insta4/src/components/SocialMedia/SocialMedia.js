import React, {Component} from 'react'
import './SocialMedia.css'

import {IconeSemContador} from '../IconeSemContador/IconeSemContador'

import iconeFacebook from '../../img/facebook.svg'
import iconeTwitter from '../../img/twitter.png'

export class SocialMedia extends Component {
  state = {
    mensagem: ''
  }

  handleChange = (event) => {
    this.setState({
      mensagem: event.target.value
    })
  }

  onClickFacebook = () => {
    console.log(`Post compartilhado no Facebook com a mensagem: ${this.state.mensagem}`)
    this.setState({
      mensagem: ''
    })
  }
  
  onClickTwitter = () => {
    console.log(`Post compartilhado no Twitter com a mensagem: ${this.state.mensagem}`)
      this.setState({
        mensagem: ''
      })
  }

  render() {
    return (
      <div className='share-container'>
        <input
          type="text"
          value={this.state.mensagem}
          onChange={this.handleChange}
        />
        
        <div className='icons-container'>
          <IconeSemContador
            icone={iconeFacebook}
            onClickIcone={this.onClickFacebook}
          />

          <IconeSemContador
            icone={iconeTwitter}
            onClickIcone={this.onClickTwitter}
          />
        </div>
      </div>
    )
  }
}