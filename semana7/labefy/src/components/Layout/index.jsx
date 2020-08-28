import React from 'react'

import { Container } from './styles'

import Header from '../Header'
import Main from '../Main'
import Player from '../Player'

const Layout = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Player />
    </Container>
  )
}

export default Layout