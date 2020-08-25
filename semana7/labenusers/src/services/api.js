import axios from 'axios'

const api = axios.create({
  baseURL: "https://us-central1-labenu-apis.cloudfunctions.net/labenusers",
  headers: {
    Authorization: 'daniel-melo-jackson'
  }
})

export default api