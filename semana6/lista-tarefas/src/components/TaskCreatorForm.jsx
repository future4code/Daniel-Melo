import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  margin: 5px 0px 10px 0px;

  button {
    margin-left: 10px;
  }
`


const TaskCreatorForm = (props) => {
  return (
    <StyledForm onSubmit={props.editing.status ? (e) => props.onEditTask(e, props.editing.id) : props.onCreateTask}>
      <input type="text" value={props.task} onChange={props.onTaskChange} required/>
      <button type="submit">{props.editing.status ? "Salvar" : "Adicionar"}</button>
    </StyledForm>
  )
}

export default TaskCreatorForm