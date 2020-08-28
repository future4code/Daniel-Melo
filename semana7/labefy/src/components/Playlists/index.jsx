import React, { Component } from 'react'

import { Container } from './styles'

import PlayListCard from './PlaylistCard'

class Playlists extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playlists: [
        {
          id: 1,
          name: "Playlist 1"
        },
        {
          id: 2,
          name: "Playlist 1"
        },
        {
          id: 3,
          name: "Playlist 1"
        },
        {
          id: 4,
          name: "Playlist 1"
        },
        {
          id: 5,
          name: "Playlist 1"
        },
        {
          id: 6,
          name: "Playlist 1"
        },
        {
          id: 7,
          name: "Playlist 1"
        },
        {
          id: 8,
          name: "Playlist 1"
        },
      ]
    }
  }
  
  render () {
    return (
      <Container>
        {
          this.state.playlists.map((playlist, i) => (
            <PlayListCard 
              key={playlist.id}
              image={`https://picsum.photos/200?a=${i}`}
              name={playlist.name}
            />
          ))
        }
      </Container>
    )
  }
}

export default Playlists