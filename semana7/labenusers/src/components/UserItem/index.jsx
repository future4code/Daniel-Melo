import React from 'react'
import api from '../../services/api'


import {MdDelete, MdEdit} from 'react-icons/md'

import { Container } from './styles'
import { ButtonsContainer } from '../../styles/ButtonsContainer'
import { StyledButton } from '../../styles/StyledButton'


const UserItem = (props) => {
  const deleteUser = async () => {
    const confirmation = window.confirm(`Tem certeza que deseja deletar ${props.userName}?`) 

    if (confirmation) {
      try {
        await api.delete(`/users/${props.userId}`)
        alert('Usuári@ deletad@ com sucesso!')
        props.onDelete(props.userId)
      } catch (error) {
        alert('Erro ao deletar usuári@!')
      }
    }
  }
  
  return (
    <Container>
      <span>{props.userName}</span>

      <ButtonsContainer>
        <StyledButton className="edit" onClick={() => props.onDetail(props.userId)}><MdEdit /></StyledButton>
        <StyledButton onClick={deleteUser}><MdDelete /></StyledButton>
      </ButtonsContainer>
    </Container>
)}

export default UserItem