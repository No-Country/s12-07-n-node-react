import { searchService, filterService, actorDetailService } from "../services/discover.service.js"
import { isPageValid } from "../utils/discover.helpers.js"

export const searchController = async (req, res) => {

  const { query, page } = req.query
  if (page === '') return res.status(400).json({ message: "page selection not allowed", code: "A2" })
  if (!query) return res.status(400).json({ message: "no query detected", code: "A1" })
  if (page && !isPageValid(page)) return res.status(400).json({ message: "page selection not allowed", code: "A2" })

  try {
    const response = await searchService(query, page)
    res.status(200).json({ data: response })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const filterController = async (req, res) => {

  const { genre, page } = req.params
  if (page <= 0) return res.json({ message: "Provide a valid page" })
  const selectedGenre = genre.toUpperCase()


  try {
    const response = await filterService(selectedGenre, page)
    if (response.movies.code === 'ERR_BAD_REQUEST') return res.json({ message: "Peticion invalida" })
    res.json({ data: response })
  } catch (error) {
    res.json({ message: error.message })
  }
}


export const actorDetailController = async (req, res) => {

  const { id } = req.params


  try {
    const response = await actorDetailService(id)
    if (response.code === 'ERR_BAD_REQUEST') return res.json({ message: "Peticion invalida" })
    res.json({ data: response })
  } catch (error) {
    res.json({ message: error.message })
  }
}


