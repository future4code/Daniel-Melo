import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid black;
  padding: 10px 12.5vw;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'newPlaylistForm newPlaylistForm newPlaylistForm';
  gap: 10px;

  form {
    display: flex;
    justify-content: center;

    grid-area: newPlaylistForm;
  }
`