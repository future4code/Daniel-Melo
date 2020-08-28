import React from 'react'

import { Container } from './styles'

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
      <button type="submit">Create</button>
      <button type="reset">Clear</button>
    </Container>
  )
}

export default CreatePlaylistForm