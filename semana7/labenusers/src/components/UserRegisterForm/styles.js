import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
`

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 10px;

  label {
    margin-right: 5px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
`

export const StyledButton = styled.button`
  cursor: pointer;
  margin: 0px 5px;
  padding: 5px;
`
