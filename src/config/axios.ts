import axios from 'axios'

const api = axios.create({
  baseURL: 'https://saraudapracaapi.herokuapp.com'
})

export default api
