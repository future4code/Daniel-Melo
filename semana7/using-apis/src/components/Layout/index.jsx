import React, { Component } from 'react'

import { Container } from './styles'

import Header from '../Header'
import Main from '../Main'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1
    }
  }

  render() {
    return (
      <Container>
        <Header />
        <Main />
      </Container>
    )  
  }
}

export default Layout