import styled from 'styled-components'

export const Container = styled.div`
  grid-area: content;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  min-height: 200px;
  padding: 10px;
  border: 1px solid var(--dark-sea-green);
  border-radius: 20px;
  background-color: var(--steel-teal);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);

  > div {
    display: flex;
    align-items: center;
  }
`

export const ListContainer = styled.ul`
  list-style-type: none;
  margin: 20px auto;
  padding: 0;
  width: 300px;
`