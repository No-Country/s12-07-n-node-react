import { registerService } from "../services/auth.services.js"


export const registerController = async (req, res) => {
  try {
    console.log("Register controller", req.body)
    const response = await registerService(req.body)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ message: error.message })

  }

}
