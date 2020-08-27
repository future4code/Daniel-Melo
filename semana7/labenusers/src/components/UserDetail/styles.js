import styled from 'styled-components'

export const Container = styled.div`
   grid-area: content;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 200px;
  padding: 10px;
  border: 1px solid var(--dark-sea-green);
  border-radius: 20px;
  background-color: var(--steel-teal);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin: 10px 0px;
  }
`