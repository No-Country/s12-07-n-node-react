import { getContentByPlatformService, getUpcomingService, getContentByGenreService } from "../services/content.services.js"

const getContentByPlatformController = async (req, res) => {
  const { network } = req.params// Aca va el id de la plataforma, se la pasaremos al controlador
  const selectedNetWork = network.toUpperCase()

  try {
    const response = await getContentByPlatformService(selectedNetWork)
    res.json(response)
  } catch (error) {
    res.json(error.message)
  }
}

const getUpcomingController = async (req, res) => {

  try {
    const response = await getUpcomingService()
    res.json(response)
  } catch (error) {
    res.json(error.message)

  }

}
const getContentByGenreController = async (req, res) => {

  const { genre } = req.params
  const selectedGenre = genre.toUpperCase()

  try {
    const response = await getContentByGenreService(selectedGenre)
    res.json(response)
  } catch (error) {
    res.json(error.message)

  }

}


export { getContentByPlatformController, getUpcomingController, getContentByGenreController }

