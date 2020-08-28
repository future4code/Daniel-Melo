import React from 'react'

import { Container } from './styles'
import CreateButton from '../../CreateButton'
import ClearButton from '../../ClearButton'

const CreatePlaylistForm = (props) => {
  return (
    <Container onSubmit={props.onSubmit} onReset={props.onReset}>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Nova Playlist"
        required
      />
      <CreateButton type="submit">Create</CreateButton>
      <ClearButton type="reset">Clear</ClearButton>
    </Container>
  )
}

export default CreatePlaylistForm