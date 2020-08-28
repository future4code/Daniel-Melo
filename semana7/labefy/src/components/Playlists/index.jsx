import React, { Component } from 'react'
import { getAllPlaylists } from '../../services/api'
import { axiosErrorHandler } from '../../utils/axiosErrorHandler'

import { Container } from './styles'

import PlayListCard from './PlaylistCard'

class Playlists extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playlists: []
    }
  }
  
  componentDidMount = () => {
    this.setPlaylists()
  }

  setPlaylists = async () => {
    try {
      const response = await getAllPlaylists()
      const playlists = response.data.result.list
  
      this.setState({playlists})
    } catch (error) {
      axiosErrorHandler(error)
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