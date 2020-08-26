import React from 'react'

import UserList from '../../components/UserList'
import { Container } from './styles'

const Users = ({onClickUserDetail}) => {
  return (
    <Container>
      <h1>Usuários Cadastrados</h1>

      <UserList onClickUserDetail={onClickUserDetail}/>
    </Container>
  )
}

export default Users