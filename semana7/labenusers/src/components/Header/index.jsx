import React from 'react'

import { Container, StyledButton } from './styles'

const Header = ({onClickUserRegisterPageButton, onClickUserListPageButton}) => {
  return (
    <Container>
      <StyledButton onClick={onClickUserRegisterPageButton}>Novo Usuário</StyledButton>
      <StyledButton onClick={onClickUserListPageButton}>Buscar Usuários</StyledButton>
    </Container>
  )
}

export default Header