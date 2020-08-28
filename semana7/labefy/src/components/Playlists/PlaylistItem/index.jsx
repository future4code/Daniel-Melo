import React from 'react'

import { Container } from './styles'

const PlaylistItem = (props) => {
  return (
    <Container>
      <td>{props.name}</td>
      <td>
        <button onClick={() => props.onInspect(props.playlistId, props.name)}>Inspect</button>
        <button onClick={() => props.onDelete(props.playlistId)}>Delete</button>
      </td>
    </Container>
  )
}

export default PlaylistItem