import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: '. header .' '. content .';

  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`