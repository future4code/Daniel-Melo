import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledButton = styled.button`
  font-size: 0.95rem;
  border: 1px solid var(--secondary);
  border-radius: 20px;
  padding: 1em;
  color: var(--secondary);
  background: transparent;
  transition: background-color 500ms ease-in-out;

  :hover {
    background-color: var(--independece);
  }
`