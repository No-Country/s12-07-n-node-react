import { listModel } from "../models/lists.models.js"
import { isDuplicate, validateContent } from "../utils/list.helpers.js"


export const addToListService = async (content, owner) => {

  const currentList = await getListService(owner)
  const doesExist = await validateContent({ id: content.contentId, media: content.media_type })
  if (!doesExist) throw new Error('Movie or tv show not found')
  if (isDuplicate(currentList.list, content.contentId)) throw new Error('Already on list')

  try {

    if (!currentList) {
      const response = await listModel.create({ ownerId: owner, list: [content] })
      return response
    } else {
      const updateResponse = await listModel.updateOne({ ownerId: owner },
        { $push: { list: content } })
      return updateResponse
    }

  } catch (error) {
    console.log('Error on addlist service')
    console.log(error)
    return error

  }
}
export const getListService = async (userId) => {

  try {
    const list = await listModel.findOne({ ownerId: userId })
    return list
  } catch (error) {
    console.log('Error on getlist service')
    console.log(error)
    return error
  }
}
