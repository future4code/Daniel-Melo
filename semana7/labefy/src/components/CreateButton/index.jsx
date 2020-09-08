import React from 'react'

import { Container } from './styles'

import { MdSave } from 'react-icons/md'

const CreateButton = (props) => {
  return (
    <Container type={props.type}>
      <MdSave font-size={20} />
    </Container>
  )
}

export default CreateButton