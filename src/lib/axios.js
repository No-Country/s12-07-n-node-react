import axios, { AxiosHeaders } from 'axios'


const authApi = axios.create({
  baseURL: '',
  withCredentials: true
})

authApi.interceptors.request.use(config => {

  // Dejo esto para futura configuracion con tokens para los usuarios
  // (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`)

  return config
})


export default authApi
