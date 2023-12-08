import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()

// Esta instancia es para la api de tmdb, uego usaremos otra para nuestra propia api, ya que se requerira otro token de acceso que generaremos nosotros con JWT
const tmdbAxios = axios.create({
  headers: {
    Authorization: `Bearer  ${process.env.TMDB_API_KEY}`,
    accept: 'application/json'
  }
})

export default tmdbAxios
