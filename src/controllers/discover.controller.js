import { searchService } from "../services/discover.service.js"
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



