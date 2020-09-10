import axios from 'axios'

const api = axios.create({
  baseURL: 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/danielmelo'
})

export const getProfileToChoose = () => api.get('/person')

export const choosePerson = (id, choice) => api.post('/choose-person', { id, choice })

export const getMatches = () => api.get('/matches')

export const clearAll = () => api.put('/clear')