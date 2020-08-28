import React from 'react'

import { Container } from './styles'

import PlaylistItem from '../PlaylistItem'

const PlaylistsTable = (props) => {
  return (
    <Container>
       <thead>
          <tr>
            <th>Playlists</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {props.playlists.map((playlist, id) => (
            <PlaylistItem 
              key={playlist.id}
              playlistId={playlist.id}
              name={playlist.name}
              onDelete={props.onDelete}
              onInspect={props.onInspect}
            />
          ))}
        </tbody>
    </Container>
  )
}

export default PlaylistsTable