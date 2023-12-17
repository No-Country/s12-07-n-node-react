
import { getListService, addToListService } from "../services/lists.services.js"

export const addToListController = async (req, res) => {

  const user = req.user.validUser.id

  const { contentId, imageURL, contentName, media_type } = req.body

  if (!contentId || !imageURL || !contentName || !media_type) return res.status(400).json({ message: 'Values missing' })


  try {
    const response = await addToListService(req.body, user)
    res.status(200).json({ message: "Content Added to your list", details: response })
  } catch (error) {
    res.json({ message: error.message })
  }

}
export const getListController = async (req, res) => {

  const { userId } = req.params

  try {
    const response = await getListService(userId)
    if (response === null) throw new Error('Not found')
    res.json(response)
  } catch (error) {
    res.json({ message: error.message })
  }

}
