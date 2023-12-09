import { userModel } from "../models/user.models.js"
import { encryptPassword } from "../utils/auth.helpers.js"

export const registerService = async (user) => {

  const { mail, name, surname, password, phone, needsNotification } = user
  console.log(mail)

  // const isExistent = await userModel.findOne(mail)

  // if (isExistent) throw new Error('User already registered')
  // password = encryptPassword(password)
  const newUser = { mail, name, surname, password, phone, needsNotification }

  console.log(newUser)
  try {
    const response = await userModel.create(newUser)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }



}
