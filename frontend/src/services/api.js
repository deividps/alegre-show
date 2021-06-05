import axios from 'axios'

const api = axios.create({
   baseURL: 'http://api.alegreshow.com.br'
})

export default api
