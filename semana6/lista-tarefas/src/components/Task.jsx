import React from 'react'
import styled from 'styled-components'

const StyledLi = styled.li`
  display: flex;
  margin: 10px 0px;
  justify-content: space-between;
`

const StyledSpan = styled.span`
  cursor: pointer;
  text-decoration: ${(props) => props.completed ? 'line-through' : 'none'};
  margin-right: 10px;
`

const Task = (props) => {
  return (
    <StyledLi>
      <StyledSpan completed={props.task.completed} onClick={() => props.onClickTask(props.task.id)}>{props.task.description}</StyledSpan>
      <div>
        <button onClick={() => props.onEdit(props.task.id)}>Editar</button>
        <button onClick={() => props.onDelete(props.task.id)}>Excluir</button>
      </div>
    </StyledLi>
  )
}

export default Task