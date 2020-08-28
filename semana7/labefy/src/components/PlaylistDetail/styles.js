import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px 1fr;
  gap: 10px;
  grid-template-areas: 
    'title . backButton'
    'addTrack addTrack addTrack'
    'table table table'  
  ;
  padding: 10px 12.5vw;

  h1 {
    grid-area: title;
    margin-bottom: 20px;
  }

  form {
    grid-area: addTrack;
  }

  & > button {
    grid-area: backButton;
  }
`