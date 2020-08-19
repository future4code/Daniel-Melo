import React from 'react'
import styled from 'styled-components'

import Task from './Task'

const TaskListContainer = styled.div`
  display: flex;
`

const StyledDiv = styled.div`
  text-align: center;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  min-width: 300px;
  min-height: 300px;
`

const StyledUl = styled.ul`
  list-style-type: 'none';
  padding: 0px;
`

const TaskList = (props) => {
  const completedTasks = () => {
      return props.taskList
          .filter(task => task.completed)
          .filter(task => task.description.toLowerCase().includes(props.filter.toLowerCase()))
          .map(task => 
            (
              <Task
                key={task.id}
                task={task}
                onClickTask={props.onClickTask}
                onDelete={props.onDeleteTask}
                onEdit={props.onEditTask}
              />
            )
          )
    }
  
  const notCompletedTasks = () => {
      return props.taskList
          .filter(task => !task.completed)
          .filter(task => task.description.toLowerCase().includes(props.filter.toLowerCase()))
          .map(task => 
            (
              <Task
                key={task.id}
                task={task}
                onClickTask={props.onClickTask}
                onDelete={props.onDeleteTask}
                onEdit={props.onEditTask}
              />
            )
          )
    }

    return (
      <TaskListContainer>
        <StyledDiv>
          <h3>Pendentes</h3>
          <StyledUl>
            {notCompletedTasks()}
          </StyledUl>
        </StyledDiv>
        <StyledDiv>
          <h3>Completas</h3>
          <StyledUl>
            {completedTasks()}
          </StyledUl>
        </StyledDiv>
      </TaskListContainer>
    )
}

export default TaskList