import React from 'react'

import { Container } from './styles'

import Main from '../Main'
import Player from '../Player'

const Layout = () => {
  return (
    <Container>
      <Player />
      <Main />
    </Container>
  )
}

export default Layout