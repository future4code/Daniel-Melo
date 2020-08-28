import React, { Component } from 'react'
import axios from 'axios'
import { axiosErrorHandler } from '../../utils/axiosErrorHandler'

import { Container } from './styles'

const api = axios.create({
  baseURL: 'http://api.icndb.com'
})

const initialState = {
  firstNameInput: '',
  lastNameInput: '',
  joke: '',
  searched: false
}

class FindAdress extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  handleFirstNameChange = (e) => {
    this.setState({ firstNameInput: e.target.value })
  }
  
  handleLastNameChange = (e) => {
    this.setState({ lastNameInput: e.target.value })
  }

  findAddress = async (e) => {
    e.preventDefault()

    try {
      const { data } = await api.get(`/jokes/random` , {
        params: {
          firstName: this.state.firstNameInput,
          lastName: this.state.lastNameInput
        }
      })

      if (data.type === "success") {
        const joke = data.value.joke
        
        this.setState({
          joke,
          searched: true,
        })
      } else {
        alert('Erro ao buscar piada')
        this.clear()
      }
    } catch (err) {
      alert('Erro ao buscar piada')
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
        <h1>Tell me a Joke!</h1>

        <form onSubmit={this.findAddress} onReset={this.clear}>
          <input
            type="text"
            value={this.state.firstNameInput}
            onChange={this.handleFirstNameChange}
            placeholder="Qual seu nome?"
            required
          />
          <input
            type="text"
            value={this.state.lastNameInput}
            onChange={this.handleLastNameChange}
            placeholder="Qual seu sobrenome?"
            required
          />
          <button type="submit">Hit me!</button>
          <button type="reset">Limpar</button>
        </form>

        {
          this.state.searched && 
          <p>{this.state.joke}</p>
        }
      </Container>
    )  
  }
}

export default FindAdress