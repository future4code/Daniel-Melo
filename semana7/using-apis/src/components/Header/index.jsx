import React from 'react'

import { Container } from './styles'

const Header = (props) => {
  return (
    <Container>
      <button onClick={props.onClickViaCEP}>ViaCEP</button>
      <button onClick={props.onClickLyricsOVH}>LyricsOVH</button>
      <button onClick={props.onClickPicsum}>Picsum</button>
      <button onClick={props.onClickTheStarWarsAPI}>Tell me a Joke!</button>
    </Container>
  )  
}

export default Header