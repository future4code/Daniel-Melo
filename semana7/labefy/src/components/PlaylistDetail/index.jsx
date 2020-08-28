import React from 'react'

import { Container } from './styles'

const PlaylistDetail = () => {
  return (
    <Container>
      <h1>Playlist</h1>
      <button>Voltar</button>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Artistas</th>
            <th>Player</th>
            <th>Actions</th>
          </tr>

          <tr>
            <td>Título</td>
            <td>Artistas</td>
            <td>
              <audio controls>
                <source src="http://spoti4.future4.com.br/1.mp3" type="audio/mpeg" />
                Your browser does not support the audio tag.
              </audio>
            </td>
            <td>
              <button>Excluir</button>
            </td>
          </tr>
          <tr>
            <td>Título</td>
            <td>Artistas</td>
            <td>
              <audio controls>
                <source src="http://spoti4.future4.com.br/1.mp3" type="audio/mpeg" />
                Your browser does not support the audio tag.
              </audio>
            </td>
            <td>
              <button>Excluir</button>
            </td>
          </tr>
          <tr>
            <td>Título</td>
            <td>Artistas</td>
            <td>
              <audio controls>
                <source src="http://spoti4.future4.com.br/1.mp3" type="audio/mpeg" />
                Your browser does not support the audio tag.
              </audio>
            </td>
            <td>
              <button>Excluir</button>
            </td>
          </tr>
        </thead>
      </table>
    </Container>
  )
}

export default PlaylistDetail
