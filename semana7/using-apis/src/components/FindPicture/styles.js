import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 10px;
  }

  input {
    margin: 1px;
  }
`