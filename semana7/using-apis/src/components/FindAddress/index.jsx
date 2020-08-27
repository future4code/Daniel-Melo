import React, { Component } from 'react'
import axios from 'axios'
import { axiosErrorHandler } from '../../utils/axiosErrorHandler'

import { Container } from './styles'

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

const initialState = {
  cepInput: '',
  cep: '',
  logradouro: '',
  bairro: '',
  localidade: '',
  uf: '',
  searched: false
}

class FindAdress extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  handleCepChange = (e) => {
    this.setState({ cepInput: e.target.value })
  }

  findAddress = async (e) => {
    e.preventDefault()

    try {
      const { data } = await api.get(`${this.state.cepInput}/json`)

      if (data.erro) {
        alert('CEP inválido')
        return this.clear()
      }

      const cep = data.cep
      const logradouro = data.logradouro
      const bairro = data.bairro
      const localidade = data.localidade
      const uf = data.uf

      this.setState({
        cep,
        logradouro,
        bairro,
        localidade,
        uf,
        searched: true,
        cepInput: ''
      })
    } catch (err) {
      alert('Erro ao buscar CEP')
      axiosErrorHandler(err)
    }
  }

  clear = () => {
    this.setState(initialState)
  }

  render() {
    return (
      <Container>
        <h1>Buscar Endereço</h1>

        <form onSubmit={this.findAddress} onReset={this.clear}>
          <input
            type="text"
            value={this.state.cepInput}
            onChange={this.handleCepChange}
            placeholder="CEP: XXXXXXXX"
            maxLength="8"
            pattern="\d{8}"
            required
          />
          <button type="submit">Buscar Endereço</button>
          <button type="reset">Limpar</button>
        </form>

        {
          this.state.searched && 
          <p>{this.state.logradouro}, {this.state.bairro}, {this.state.localidade}-{this.state.uf} CEP: {this.state.cep}</p>
        }
      </Container>
    )  
  }
}

export default FindAdress