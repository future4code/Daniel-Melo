import React from 'react'

import { Container } from './styles'

const Input = (props) => {
  return (
    <Container>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input 
        id={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder || ''}
        onChange={props.onChange}
        required={props.required}/>
    </Container>
  )
}

export default Input