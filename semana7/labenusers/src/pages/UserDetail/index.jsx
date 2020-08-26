import React from 'react'

import { Container } from './styles'
import UserData from '../../components/UserData'

const UserDetail = ({userId, setUserListPage}) => {
  return (
    <Container>
      <UserData userId={userId} setUserListPage={setUserListPage}/>
    </Container>
  )
}

export default UserDetail