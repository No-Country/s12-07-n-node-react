import { getContentByPlatformService } from "../services/content.services.js"

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

export { getContentByPlatformController }

