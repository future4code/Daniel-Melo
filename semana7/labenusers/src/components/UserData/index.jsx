import React, {Component} from 'react'
import api from '../../services/api'

import {MdDelete, MdCreate, MdSave, MdClear} from 'react-icons/md'
import {Container, DataContainer} from './styles'

class UserData extends Component {
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

  getUser = () => {
    api.get(`/users/${this.props.userId}`)
      .then(response => this.setState({user: response.data}))
      .catch(_ => console.log('Erro ao buscar usuário'))
  }

  editUser = () => {
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput
    }

    api.put(`/users/${this.props.userId}`, body)
      .then(_ => alert('Usuári@ editad@ com sucesso!'))
      .catch(_ => alert('Erro ao editar usuári@!'))
      .finally(_ => this.onClickClear())
  }

  deleteUser = () => {
    const confirmation = window.confirm(`Tem certeza que deseja deletar ${this.state.user.name}?`) 

    if (confirmation) {
      api.delete(`/users/${this.props.userId}`)
        .then(_ => {
          alert('Usuári@ deletad@ com sucesso!')
          this.props.setUserListPage()
        })
        .catch(_ => alert('Erro ao deletar usuári@!'))
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
        <DataContainer>
          {
            this.state.editing
              ? <input type="text" value={this.state.nameInput} onChange={this.onChangeNameInput}/>
              : <h2>{this.state.user.name || "Carregando..."}</h2>
          }
          {
            this.state.editing
              ? <input type="email" value={this.state.emailInput} onChange={this.onChangeEmailInput}/>
              : <h3>{this.state.user.email || "Carregando..."}</h3>
          }
        </DataContainer>

        <div>
          {
            this.state.editing
              ? <button onClick={this.onClickSave}><MdSave /></button>
              : <button onClick={this.onClickEdit}><MdCreate /></button>
          }
          {
            this.state.editing
              ? <button onClick={this.onClickClear}><MdClear /></button>
              : <button onClick={this.deleteUser}><MdDelete /></button>
          }
        </div>
      </Container>
    )
  }
}

export default UserData