import React, { Component } from 'react'

import { Container } from './styles'

import Playlists from '../Playlists'

const initialState = {
  page: 'PLAYLISTS'
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }
  
  setPageToRender = () => {
    switch (this.state.page) {
      case 'PLAYLISTS':
        return <Playlists />
      case 'DETAIL':
        return <h1>Under construction</h1>
      default:
        return <Playlists />
    }
  }

  render() {
    return (
      <Container>
        {this.setPageToRender()}
      </Container>
    )
  }
  
}

export default Main