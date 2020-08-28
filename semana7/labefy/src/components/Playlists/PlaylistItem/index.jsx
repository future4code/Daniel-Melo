import React from 'react'

import { Container } from './styles'

import InspectButton from '../../InspectButton'
import DeleteButton from '../../DeleteButton'

const PlaylistItem = (props) => {
  return (
    <Container>
      <td>{props.name}</td>
      <td>
        <InspectButton onClick={() => props.onInspect(props.playlistId, props.name)} />
        <DeleteButton onClick={() => props.onDelete(props.playlistId)} />
      </td>
    </Container>
  )
}

export default PlaylistItem