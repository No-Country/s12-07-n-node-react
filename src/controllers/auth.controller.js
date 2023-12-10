import { loginService, registerService } from "../services/auth.services.js"


export const registerController = async (req, res) => {

  try {
    await registerService(req.body)
    res.status(200).json({ message: 'User successfully registered' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const loginController = async (req, res) => {

  try {
    const response = await loginService(req.body)
    res.status(200).json({ message: 'Login successful', user: response })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const sessionController = async (req, res) => {
  if (!req.user) res.status(400).json({ message: "User not found" })
  const { name, surname, mail, phone, _id } = req.user.userInfo
  res.status(200).json({ message: "welcome", userInfo: { name, surname, mail, phone, _id } })
}
