import React from 'react'

import { Container } from './styles'

import { MdSearch } from 'react-icons/md'

const InspectButton = (props) => {
  return (
    <Container onClick={props.onClick}>
      <MdSearch font-size={20} />
    </Container>
  )
}

export default InspectButton