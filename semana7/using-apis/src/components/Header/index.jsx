import React from 'react'

import { Container } from './styles'

const Header = (props) => {
  return (
    <Container>
      <button className={props.page === 1 ? 'active' : ''} onClick={props.onClickViaCEP}>ViaCEP</button>
      <button className={props.page === 2 ? 'active' : ''} onClick={props.onClickLyricsOVH}>LyricsOVH</button>
      <button className={props.page === 3 ? 'active' : ''} onClick={props.onClickPicsum}>Picsum</button>
      <button className={props.page === 4 ? 'active' : ''} onClick={props.onClickTellMeAJoke}>Tell me a Joke!</button>
    </Container>
  )  
}

export default Header