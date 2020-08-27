import React, {Component} from 'react'
import api from '../../services/api'

import {Container, DataContainer} from './styles'
import { ButtonsContainer } from '../../styles/ButtonsContainer'
import { StyledButton } from '../../styles/StyledButton'

import {MdDelete, MdCreate, MdSave, MdClear} from 'react-icons/md'
import Input from '../Input'

class UserDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      editing: false,
      nameInput: '',
      emailInput: ''
    }
  }

  componentDidMount = () => {
   this.getUser() 
  }

  getUser = async () => {
    try {
      const response = await api.get(`/users/${this.props.userId}`)
      this.setState({user: response.data})
    } catch (error) {
      alert('Erro ao buscar usuári@!')
    }
  }

  editUser = async () => {
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput
    }

    try {
      await api.put(`/users/${this.props.userId}`, body)
      alert('Usuári@ editad@ com sucesso!')
    } catch (error) {
      alert('Erro ao editar usuári@!')
    }
    
    this.onClickClear()
  }

  deleteUser = async () => {
    const confirmation = window.confirm(`Tem certeza que deseja deletar ${this.state.user.name}?`) 
    
    if (confirmation) {
      try {
        await api.delete(`/users/${this.props.userId}`)
        alert('Usuári@ deletad@ com sucesso!')
        this.props.setUserListPage()
      } catch (error) {
        alert('Erro ao deletar usuári@!')
      }
    }
  }

  onClickEdit = () => {
    this.setState({editing: true, nameInput: this.state.user.name, emailInput: this.state.user.email})
  }

  onClickSave = () => {
    this.editUser()
  }

  onClickClear = () => {
    this.getUser()
    this.setState({editing: false})
  }

  onChangeNameInput = (e) => {
    this.setState({nameInput: e.target.value})
  }

  onChangeEmailInput = (e) => {
    this.setState({emailInput: e.target.value})
  }
  
  render() {
    return (
      <Container>
        {
        this.state.editing
          ? (
            <>
              <DataContainer>
                <Input type="text" value={this.state.nameInput} onChange={this.onChangeNameInput}/>
                <Input type="email" value={this.state.emailInput} onChange={this.onChangeEmailInput}/>
              </DataContainer>

              <ButtonsContainer>
                <StyledButton className="primary" onClick={this.onClickSave}><MdSave fontSize="1.2rem"/></StyledButton>
                <StyledButton onClick={this.onClickClear}><MdClear fontSize="1.2rem"/></StyledButton>
              </ButtonsContainer>
            </>
          ) 
          : (
            <>
              <DataContainer>
                <h2>{this.state.user.name || "Carregando..."}</h2>
                <h3>{this.state.user.email || "Carregando..."}</h3>
              </DataContainer>

              <ButtonsContainer>
                <StyledButton className="edit" onClick={this.onClickEdit}><MdCreate fontSize="1.2rem"/></StyledButton>
                <StyledButton onClick={this.deleteUser}><MdDelete fontSize="1.2rem"/></StyledButton>
              </ButtonsContainer>
            </>
          )
        }
      </Container>
    )
  }
}

export default UserDetail