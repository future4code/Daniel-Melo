import React from 'react'

import UserRegisterForm from './components/UserRegisterForm'
import UserList from './components/UserList'
import UserDetail from './components/UserDetail'

const PageRouter = ({page, onClickUserDetail, currentUserId, setUserListPage}) => {
  switch (page) {
    case 2:
      return <UserList onClickUserDetail={onClickUserDetail}  />
    case 3:
      return <UserDetail userId={currentUserId} setUserListPage={setUserListPage} />
    default:
      return <UserRegisterForm />

  }
}

export default PageRouter