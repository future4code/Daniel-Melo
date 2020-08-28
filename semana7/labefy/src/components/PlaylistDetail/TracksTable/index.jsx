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
          <TrackItem
            title='Título'
            artists='Artistas'
            source='http://spoti4.future4.com.br/1.mp3'
          />
        </tbody>
    </Container>
  )
}

export default TracksTable