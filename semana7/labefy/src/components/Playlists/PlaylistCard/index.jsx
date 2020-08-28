import React from 'react'

import { Container } from './styles'

const PlayListCard = (props) => {
  return (
    <Container>
      <img src={props.image} alt="playlist"/>
      <h2>{props.name}</h2>
      
      <div>
        <button>Inspecionar</button>
        <button onClick={() => props.onDelete(props.playlistId)}>Excluir</button>
      </div>
    </Container>
  )
}

export default PlayListCard