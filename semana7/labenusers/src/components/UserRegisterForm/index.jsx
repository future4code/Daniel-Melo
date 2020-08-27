import React, {Component} from 'react'
import api from '../../services/api'

import Input from '../Input'
import { MdSave, MdClear } from 'react-icons/md'

import { StyledForm } from './styles'
import { ButtonsContainer } from '../../styles/ButtonsContainer'
import { StyledButton } from '../../styles/StyledButton'


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

  createUser = async (e) => {
    e.preventDefault()

    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput
    }

    try {
      await api.post('/users', body)
      alert('Usuári@ cadastrad@ com sucesso!')
      this.resetInputs()
    } catch (error) {
      alert('Erro ao cadastrar usuári@')
    }
  }

  resetInputs = () => {
    this.setState({nameInput: '', emailInput: ''})
  }

  render() {
    return (
      <StyledForm onSubmit={this.createUser}>
        <Input
          label="Nome:"
          name="name"
          type="text"
          value={this.state.nameInput}
          onChange={this.onChangeName}
          required  
        />
        
        <Input
          label="Email:"
          name="email"
          type="email"
          value={this.state.emailInput}
          onChange={this.onChangeEmail}
          required  
        />
  
        <ButtonsContainer>
          <StyledButton className="primary" type="submit"><MdSave fontSize="1.2rem"/></StyledButton>
          <StyledButton type="reset" onClick={this.resetInputs}><MdClear fontSize="1.2rem"/></StyledButton>
        </ButtonsContainer>
      </StyledForm>
    )
  }
}

export default UserRegisterForm