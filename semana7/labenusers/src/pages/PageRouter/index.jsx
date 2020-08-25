import React from 'react'

import UserRegister from '../UserRegister'
import Users from '../Users'
import UserDetail from '../UserDetail'

const PageRouter = ({page, onClickUserDetail, currentUserId, setUserListPage}) => {
  return (page === 2 
    ? <Users onClickUserDetail={onClickUserDetail}  />
    : page === 3
      ? <UserDetail userId={currentUserId} setUserListPage={setUserListPage} />
      : <UserRegister />)
}

export default PageRouter