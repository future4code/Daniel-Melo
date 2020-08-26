import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  label {
    margin-right: 5px;
  }

  input {
    font-size: 1rem;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid black;

    :focus {
      border-bottom: 2px solid black;
    }

    ::placeholder {
      color: var(--dark-sea-green);
    }
  }
`