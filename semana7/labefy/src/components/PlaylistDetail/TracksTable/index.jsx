import React from 'react'

import { Container } from './styles'

import TrackItem from '../TrackItem'

const TracksTable = (props) => {
  return (
    <Container>
       <thead>
          <tr>
            <th>Título</th>
            <th>Artistas</th>
            <th>Player</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            props.tracks.map((track, i) => (
              <TrackItem
                key={track.id}
                trackId={track.id} 
                title={track.name}
                artists={track.artist}
                source={`http://spoti4.future4.com.br/${i}.mp3`}
                onDelete={props.onDelete}
              />
            ))
          }
        </tbody>
    </Container>
  )
}

export default TracksTable