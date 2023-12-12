import { detailService, searchService } from "../services/discover.service.js"
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


export const detailController = async (req, res) => {
  const { id } = req.params
  if (!id) return res.status(400).json({ message: "No id provided" })

  try {
    const response = await detailService(id)
    if (response.code === 'ERR_BAD_REQUEST') return res.status(404).json({ message: "Movie or Tv show not found" })

    res.status(200).json({ data: response })

  } catch (error) {
    if (error.data.status === 404) return res.status(404).json({ message: "Not found" })

    res.status(400).json({ message: error.message })
  }



}



