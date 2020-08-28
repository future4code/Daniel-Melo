import React from 'react'

import { Container } from './styles'

const TrackItem = (props) => {
  return (
    <Container>
      <td>{props.title}</td>
      
      <td>{props.artists}</td>
      
      <td>
        <audio controls>
          <source src={props.source} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </td>
      
      <td>
        <button onClick={() => props.onDelete(props.trackId)}>Excluir</button>
      </td>
    </Container>
  )
}

export default TrackItem