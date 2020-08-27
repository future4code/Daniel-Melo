import React, { Component } from 'react'

import { Container } from './styles'

const initialState = {
  heightInput: '',
  widthInput: '',
  picture: '',
  searched: false
}

class FindPicture extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  handleHeightChange = (e) => {
    this.setState({ heightInput: e.target.value })
  }

  handleWidthChange = (e) => {
    this.setState({ widthInput: e.target.value })
  }

  findPicture = async (e) => {
    e.preventDefault()

    const picture = `https://picsum.photos/${this.state.widthInput}/${this.state.heightInput}`

    this.setState({
      picture,
      widthInput: '',
      heightInput: '',
      searched: true
    })
  }

  clear = () => {
    this.setState(initialState)
  }
  
  render() {
    return (
      <Container>
        <h1>Buscar Foto</h1>

        <form onSubmit={this.findPicture} onReset={this.clear}>
          <input
            type="text"
            value={this.state.heightInput}
            onChange={this.handleHeightChange}
            placeholder="Altura"
            required
          />
          <input
            type="text"
            value={this.state.widthInput}
            onChange={this.handleWidthChange}
            placeholder="Largura"
            required
          />
          <button type="submit">Buscar Foto</button>
          <button type="reset">Limpar</button>
        </form>

        {this.state.searched && <img src={this.state.picture} alt="foto aleatória"/> }
      </Container>
    )  
  }
}

export default FindPicture