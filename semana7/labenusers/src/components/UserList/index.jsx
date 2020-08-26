import React, {Component} from 'react'
import api from '../../services/api'

import UserItem from '../UserItem'
import { ListContainer } from './styles'

class UserList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      nameInput: ''
    }
  }

  componentDidMount = () => {
    this.getUsers()
  }
  
  getUsers = () => {
    api.get('/users').then((response) => this.setState({users: response.data}))
  }

  searchUser = () => {
    const config = {
      params: {
        name: this.state.nameInput
      }
    }

    api.get('/users/search', config)
      .then(response => this.setState({users: response.data, nameInput: ''}))
      .catch(_ => alert('Erro ao buscar usuári@'))
  }

  onChangeNameInput = (e) => {
    this.setState({nameInput: e.target.value})
  }

  deleteUser = (id) => {
    this.setState({users: this.state.users.filter(user => user.id !== id)})
  }
  
  render() {
    return (
      <>
        <div>
          <input type="text" value={this.state.nameInput} onChange={this.onChangeNameInput} placeholder="buscar nome"/>
          <button onClick={this.searchUser}>Buscar</button>
          <button onClick={this.getUsers}>Mostrar Todos</button>
        </div>
        <ListContainer>
          {this.state.users.map((user) => (
            <UserItem key={user.id} userName={user.name} userId={user.id} onDelete={this.deleteUser} onDetail={this.props.onClickUserDetail}/>
          ))}
        </ListContainer>
      </>
    )
  }
}

export default UserList