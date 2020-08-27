import React, { Component } from 'react'

import { Container } from './styles'

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
        Layout
      </Container>
    )  
  }
}

export default Layout