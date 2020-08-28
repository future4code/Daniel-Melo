import React, { Component } from 'react'
import { 
  getPlaylistTracks,
  removeTrackFromPlaylist,
  addTrackToPlaylist
} from '../../services/api'
import { axiosErrorHandler } from '../../utils/axiosErrorHandler'

import { Container } from './styles'

import TracksTable from './TracksTable'

const initialState = {
  titleInput: '',
  artistInput: '',
  urlInput: '',
  tracks: []
}

class PlaylistDetail extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  componentDidMount = () => {
    this.setPlaylistTracks()
  }

  setPlaylistTracks = async () => {
    try {
      const response = await getPlaylistTracks('bd0019d1-bdac-40ed-a804-7392329372e6')
      const tracks = response.data.result.tracks

      this.setState({tracks})
    } catch (error) {
      axiosErrorHandler(error)
    }
  }

  addTrack = async (e) => {
    e.preventDefault()

    try {
      await addTrackToPlaylist(
        'bd0019d1-bdac-40ed-a804-7392329372e6',
        this.state.titleInput,
        this.state.artistInput,
        this.state.urlInput
      )
      this.setPlaylistTracks()
    } catch (error) {
      axiosErrorHandler(error)
    }

    this.clear()
  }

  deleteTrack = async (trackId) => {
    try{
      await removeTrackFromPlaylist('bd0019d1-bdac-40ed-a804-7392329372e6', trackId)
      this.setPlaylistTracks()
    } catch (error) {
      axiosErrorHandler(error)
    }
  }

  handleTitleInputChange = (e) => {
    this.setState({ titleInput: e.target.value })
  }

  handleArtistInputChange = (e) => {
    this.setState({ artistInput: e.target.value })
  }

  handleUrlInputChange = (e) => {
    this.setState({ urlInput: e.target.value })
  }

  clear = () => {
    this.setState({
      titleInput: '',
      artistInput: '',
      urlInput: ''
    })
  }

  render() {
    return (
      <Container>
        <h1>Playlist</h1>
  
        <form onSubmit={this.addTrack} onReset={this.clear}>
          <input
            type="text"
            value={this.state.titleInput}
            onChange={this.handleTitleInputChange}
            placeholder="Título"
            required
          />
          <input
            type="text"
            value={this.state.artistInput}
            onChange={this.handleArtistInputChange}
            placeholder="Artistas"
            required
          />
          <input
            type="text"
            value={this.state.urlInput}
            onChange={this.handleUrlInputChange}
            placeholder="URL"
            required
          />
          <button type="submit">Adicionar música</button>
          <button type="reset">Limpar</button>
        </form>
  
        <TracksTable
          tracks={this.state.tracks}
          onDelete={this.deleteTrack}          
        />
      </Container>
    )
  }
}

export default PlaylistDetail
