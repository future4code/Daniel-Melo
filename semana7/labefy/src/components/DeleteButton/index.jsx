import React from 'react'

import { Container } from './styles'

import { MdDelete } from 'react-icons/md'

const InspectButton = (props) => {
  return (
    <Container onClick={props.onClick}>
      <MdDelete font-size={20}/>
    </Container>
  )
}

export default InspectButton