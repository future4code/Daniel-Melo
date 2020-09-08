import React, { Component } from 'react'
import { getAllPlaylists, createPlaylist, deletePlaylist } from '../../services/api'
import { axiosErrorHandler } from '../../utils/axiosErrorHandler'

import { Container } from './styles'

import CreatePlaylistForm from './CreatePlaylistForm'
import PlaylistsTable from './PlaylistsTable'

const initialState = {
  playlists: [],
  newPlaylistNameInput: ''
}

class Playlists extends Component {
  constructor(props) {
    super(props)

    this.state = initialState
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

  handleNewPlaylistNameChange = (e) => {
    this.setState({ newPlaylistNameInput: e.target.value })
  }

  createNewPlaylist = async (e) => {
    e.preventDefault()
    
    console.log('Nova playlist:', this.state.newPlaylistNameInput)

    try {
      await createPlaylist(this.state.newPlaylistNameInput)
      this.setPlaylists()
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message)
      }
      axiosErrorHandler(error)
    }

    this.clear()
  }

  deletePlaylist = async (id) => {
    try {
      await deletePlaylist(id)
      this.setPlaylists()
    } catch (error) {
      axiosErrorHandler(error)
    }
  }

  clear = () => {
    this.setState({
      newPlaylistNameInput: ''
    })
  }

  render () {
    return (
      <Container>
        <CreatePlaylistForm
          value={this.state.newPlaylistNameInput}
          onChange={this.handleNewPlaylistNameChange}
          onSubmit={this.createNewPlaylist}
          onReset={this.clear}
        />

        <PlaylistsTable 
          playlists={this.state.playlists}
          onDelete={this.deletePlaylist}
          onInspect={this.props.onClickInspect}
        />
      </Container>
    )
  }
}

export default Playlists