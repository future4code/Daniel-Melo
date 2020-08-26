import React from 'react'
import api from '../../services/api'
import {MdDelete, MdSearch} from 'react-icons/md'

import { Container } from './styles'

const UserItem = (props) => {
  const deleteUser = () => {
    const confirmation = window.confirm(`Tem certeza que deseja deletar ${props.userName}?`) 

    if (confirmation) {
      api.delete(`/users/${props.userId}`)
        .then(_ => {
          alert('Usuári@ deletad@ com sucesso!')
          props.onDelete(props.userId)
        })
        .catch(_ => alert('Erro ao deletar usuári@!'))
    }
  }
  
  return (
    <Container>
      <span>{props.userName}</span>

      <div>
        <button onClick={() => props.onDetail(props.userId)}><MdSearch /></button>
        <button onClick={deleteUser}><MdDelete /></button>
      </div>
    </Container>
)}

export default UserItem