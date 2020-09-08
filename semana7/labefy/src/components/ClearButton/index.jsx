import React from 'react'

import { Container } from './styles'

import { MdClear } from 'react-icons/md'

const ClearButton = (props) => {
  return (
    <Container type={props.type}>
      <MdClear font-size={20} />
    </Container>
  )
}

export default ClearButton