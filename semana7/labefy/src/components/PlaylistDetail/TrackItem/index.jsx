import React from 'react'

import { Container } from './styles'

import DeleteButton from '../../DeleteButton'

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
        <DeleteButton onClick={() => props.onDelete(props.trackId)} />
      </td>
    </Container>
  )
}

export default TrackItem