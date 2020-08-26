import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid black;
  padding: 10px;
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin: 10px 0px;
  }
`