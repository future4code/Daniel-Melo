import React from 'react'

import { Container } from './styles'

const Lyric = ({title, artist, lyrics}) => {
  return (
    <Container>
      <h2>{title.toUpperCase()}</h2>
      <h3>{artist.toUpperCase()}</h3>
      <p>{lyrics}</p>
    </Container>
  )
}

export default Lyric