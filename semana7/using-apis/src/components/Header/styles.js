import styled from 'styled-components'

export const Container = styled.header`
  height: 60px;
  padding: 10px 12.5%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 10px 20px;
    font-size: 1.2rem;
    background-color: transparent;
    border: none;
    outline: none;

    :hover, &.active {
      border-bottom: 1px solid var(--onix);
    }
  }
`