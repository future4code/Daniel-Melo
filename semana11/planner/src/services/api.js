import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-daniel-melo',
});

export default api;
