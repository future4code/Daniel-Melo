import React from 'react'
import styled from 'styled-components'

const SortButtonsContainer = styled.div`
  display: flex;
  margin: 10px 0px;

  button {
    margin: 0px 5px;
  }
`

const SortButtons = (props) => {
  return (
    <SortButtonsContainer>
      <button onClick={() => props.onSort('crescente')}>Ordem crescente</button>
      <button onClick={() => props.onSort('descrescente')}>Ordem decrescente</button>
      <button onClick={() => props.onSort('original')}>Ordem original</button>
    </SortButtonsContainer>
  )
}

export default SortButtons