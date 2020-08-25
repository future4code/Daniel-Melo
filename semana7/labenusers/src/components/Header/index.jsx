import React from 'react'

import { Container } from './styles'

const Header = ({onClickUserRegisterPageButton, onClickUserListPageButton}) => {
  return (
    <Container>
      <button onClick={onClickUserRegisterPageButton}>Cadastrar Usuários</button>
      <button onClick={onClickUserListPageButton}>Buscar Usuários</button>
    </Container>
  )
}

export default Header