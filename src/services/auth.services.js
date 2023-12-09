import { userModel } from "../models/user.models.js"
import { encryptPassword, isPasswordVerified } from "../utils/auth.helpers.js"
import { generateToken } from "../utils/session.helpers.js"


export const registerService = async (user) => {

  const { mail, name, surname, password, phone, needsNotification } = user
  const isExistent = await userModel.findOne({ mail })
  if (isExistent) throw new Error('User already registered')
  const securePassword = await encryptPassword(password)
  const newUser = { mail, name, surname, password: securePassword, phone, needsNotification }

  try {
    const response = await userModel.create(newUser)
    return response
  } catch (error) {
    return error
  }

}

export const loginService = async (user) => {

  const { mail, password } = user

  const userFromDb = await userModel.findOne({ mail })
  if (!userFromDb) throw new Error('User not found')
  const validation = await isPasswordVerified(password, userFromDb.password)
  if (!validation) throw new Error('Invalid Password')

  const token = await generateToken(userFromDb._id)
  const update = await userModel.updateOne({ _id: userFromDb._id }, { $set: { token: token } });


  return {
    token: token,
    user: userFromDb.mail
  }









}



