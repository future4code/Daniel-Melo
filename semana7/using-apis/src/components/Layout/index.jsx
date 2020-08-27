import React, { Component } from 'react'

import { Container } from './styles'

import Header from '../Header'
import Main from '../Main'

const initialState = {
  page: 1
}

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = initialState 
  }

  handleViaCEPClick = () => {
    this.setState({ page: 1 })
  }

  handleLyricsOVHClick = () => {
    this.setState({ page: 2 })
  }

  handlePicsumClick = () => {
    this.setState({ page: 3 })
  }
  handleTellMeAJokeClick = () => {
    this.setState({ page: 4 })
  }

  render() {
    return (
      <Container>
        <Header 
          page={this.state.page}
          onClickViaCEP={this.handleViaCEPClick}
          onClickLyricsOVH={this.handleLyricsOVHClick}
          onClickPicsum={this.handlePicsumClick}
          onClickTellMeAJoke={this.handleTellMeAJokeClick}
        />

        <Main page={this.state.page} />
      </Container>
    )  
  }
}

export default Layout