import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 1fr;
  gap: 10px;
  grid-template-areas: 
    'title . backButton'
    'table table table'  
  ;
  padding: 10px 12.5vw;

  h1 {
    grid-area: title;
    margin-bottom: 20px;
  }

  button {
    grid-area: backButton;
  }

  table {
    grid-area: table;
    border-collapse: collapse;
  }

  td {
    text-align: center;
    border-bottom: 1px solid #ddd;
    padding: 5px 0;
  }

  tr:hover {background-color: #f5f5f5;}

  audio {
    outline: none;
  }
`