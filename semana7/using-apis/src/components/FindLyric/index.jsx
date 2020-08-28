import React, { Component } from 'react'
import axios from 'axios'
import { axiosErrorHandler } from '../../utils/axiosErrorHandler'

import { Container } from './styles'

import Lyric from './Lyric'

const api = axios.create({
  baseURL: 'https://api.lyrics.ovh/v1/'
})

const initialState = {
  titleInput: '',
  artistInput: '',
  title: '',
  artist: '',
  lyrics: '',
  searched: false
}

class FindLyric extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  handleArtistChange = (e) => {
    this.setState({ artistInput: e.target.value })
  }

  handleTitleChange = (e) => {
    this.setState({ titleInput: e.target.value })
  }

  findLyric = async (e) => {
    e.preventDefault()

    try {
      const { data } = await api.get(`${this.state.artistInput}/${this.state.titleInput}`)

      const lyrics = data.lyrics
      const artist = this.state.artistInput
      const title = this.state.titleInput

      this.setState({
        artist,
        title,
        lyrics,
        searched: true,
      })
    } catch (err) {
      alert(err.response.data.error)
      this.clear()
      axiosErrorHandler(err)
    }
  }

  clear = () => {
    this.setState(initialState)
  }
  
  render() {
    return (
      <Container>
        <h1>Buscar Música</h1>

        <form onSubmit={this.findLyric} onReset={this.clear}>
          <input
            type="text"
            value={this.state.artistInput}
            onChange={this.handleArtistChange}
            placeholder="Artista"
            required
          />
          <input
            type="text"
            value={this.state.titleInput}
            onChange={this.handleTitleChange}
            placeholder="Título"
            required
          />
          <button type="submit">Buscar Música</button>
          <button type="reset">Limpar</button>
        </form>

        {this.state.searched && <Lyric artist={this.state.artist} title={this.state.title} lyrics={this.state.lyrics}/>}
      </Container>
    )  
  }
}

export default FindLyric