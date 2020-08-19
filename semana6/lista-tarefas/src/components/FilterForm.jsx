import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  margin: 10px  0px 5px 0px;
`

const FilterForm = (props) => {
  return (
    <StyledForm>
      <label htmlFor="filter">Buscar Tarefa: </label>
      <input type="text" id="filter" value={props.filter} onChange={props.onFilterChange}/>
    </StyledForm>
  )
}

export default FilterForm