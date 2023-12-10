import { searchService } from "../services/discover.service.js"


export const searchController = async (req, res) => {

  const { query, page } = req.query

  try {
    const response = await searchService(query, page)
    res.status(200).json({ data: response })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
