import React, {Component} from 'react'
import api from '../../services/api'

import UserItem from '../UserItem'
import Input from '../Input'
import { MdGroup, MdSearch } from 'react-icons/md'

import { Container, ListContainer } from './styles'
import { ButtonsContainer } from '../../styles/ButtonsContainer'
import { StyledButton } from '../../styles/StyledButton'

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
  
  getUsers = async () => {
    try {
      const response = await api.get('/users')
      this.setState({users: response.data})
    } catch (error) {
      alert('Erro ao buscar usuários')
    }
  }

  searchUser = async () => {
    const config = {
      params: {
        name: this.state.nameInput
      }
    }

    try {
      const response = await api.get('/users/search', config)
      this.setState({users: response.data, nameInput: ''})
    } catch (error) {
      alert('Erro ao buscar usuári@')
    }
  }
  
  deleteUser = (id) => {
    this.setState({users: this.state.users.filter(user => user.id !== id)})
  }
  
  onChangeNameInput = (e) => {
    this.setState({nameInput: e.target.value})
  }
  
  render() {
    return (
      <Container>
        <h1>Labenusers</h1>

        <div>
          <Input
            type="text"
            value={this.state.nameInput}
            onChange={this.onChangeNameInput}
            placeholder="buscar usuário"
          />

          <ButtonsContainer>
            <StyledButton className="primary" onClick={this.searchUser}><MdSearch fontSize="1.2rem"/></StyledButton>
            <StyledButton className= "edit" onClick={this.getUsers}><MdGroup fontSize="1.2rem"/></StyledButton>
          </ButtonsContainer>
        </div>
        
        <ListContainer>
          {this.state.users.map((user) => (
            <UserItem key={user.id} userName={user.name} userId={user.id} onDelete={this.deleteUser} onDetail={this.props.onClickUserDetail}/>
          ))}
        </ListContainer>
      </Container>
    )
  }
}

export default UserList