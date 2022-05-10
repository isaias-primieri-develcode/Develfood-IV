// eslint-disable-next-line quotes
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://gorest.co.in',
})

export default api
