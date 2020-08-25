import React, {Component} from 'react'
import api from '../../services/api'

import { StyledForm, InputContainer, ButtonsContainer, StyledButton} from './styles'

class UserRegisterForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nameInput: '',
      emailInput: ''
    }
  }

  onChangeName = (e) => {
    this.setState({nameInput: e.target.value})
  }

  onChangeEmail = (e) => {
    this.setState({emailInput: e.target.value})
  }

  createUser = (e) => {
    e.preventDefault()

    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput
    }

    api.post('/users', body)
      .then(response => {
        alert('Usuári@ criad@ com sucesso!')
        this.resetInputs()
      })
      .catch(err => alert('Erro ao criar usuári@'))
  }

  resetInputs = () => {
    this.setState({nameInput: '', emailInput: ''})
  }

  render() {
    return (
      <StyledForm onSubmit={this.createUser}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input id="name" type="text" value={this.state.nameInput} onChange={this.onChangeName} required/>
        </InputContainer>
        
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input id="email" type="email" value={this.state.emailInput} onChange={this.onChangeEmail} required/>
        </InputContainer>
  
        <ButtonsContainer>
          <StyledButton type="submit">Salvar</StyledButton>
          <StyledButton type="reset" onClick={this.resetInputs}>Cancelar</StyledButton>
        </ButtonsContainer>
      </StyledForm>
    )
  }
}

export default UserRegisterForm