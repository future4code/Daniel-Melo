import axios from 'axios'

const api = axios.create({
  baseURL: "https://us-central1-labenu-apis.cloudfunctions.net/labefy",
  headers: {
    Authorization: 'daniel-melo-jackson'
  }
})

export const getAllPlaylists = () => api.get('/playlists')

export const createPlaylist = (name) => api.post('/playlists', { name })

export default api