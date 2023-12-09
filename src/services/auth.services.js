import { userModel } from "../models/user.models.js"


export const registerService = async (user) => {

  const { mail, name, surname, password, phone, needsNotification } = user
  console.log(mail)

  const isExistent = await userModel.findOne({ mail })

  if (isExistent) throw new Error('User already registered')

  try {
    return userModel.create(user)
  } catch (error) {
    console.log(error)
    return error
  }



}
