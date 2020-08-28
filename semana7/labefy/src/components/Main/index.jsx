import React, { Component } from 'react'

import { Container } from './styles'

import Playlists from '../Playlists'
import PlaylistDetail from '../PlaylistDetail'

const initialState = {
  page: 'PLAYLISTS',
  currentPlaylistId: ''
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  onClickInspect = (playlistId) => {
    this.setState({
      page: 'DETAIL',
      currentPlaylistId: playlistId
    })
  }
  
  setPageToRender = () => {
    switch (this.state.page) {
      case 'DETAIL':
        return <PlaylistDetail playlistId={this.state.currentPlaylistId}/>
      default:
        return <Playlists onClickInspect={this.onClickInspect} />
    }
  }

  render() {
    return (
      <Container>
        {this.setPageToRender()}
      </Container>
    )
  }
  
}

export default Main