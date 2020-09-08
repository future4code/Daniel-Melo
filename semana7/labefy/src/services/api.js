import axios from 'axios'

const api = axios.create({
  baseURL: "https://us-central1-labenu-apis.cloudfunctions.net/labefy",
  headers: {
    Authorization: 'daniel-melo-jackson'
  }
})

export const getAllPlaylists = () => api.get('/playlists')

export const createPlaylist = (name) => api.post('/playlists', { name })

export const deletePlaylist = (id) => api.delete(`/playlists/${id}`)

export const getPlaylistTracks = (id) => api.get(`/playlists/${id}/tracks`)

export const addTrackToPlaylist = (playlistId, name, artist, url) => (
  api.post(`/playlists/${playlistId}/tracks`, { name, artist, url })
)

export const removeTrackFromPlaylist = (playlistId, trackId) => (
  api.delete(`/playlists/${playlistId}/tracks/${trackId}`)
) 

export default api