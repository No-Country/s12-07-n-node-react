import { userModel } from "../models/user.models.js";
import { verifyToken } from "../utils/session.helpers.js";

const checkJWT = async (req, res, next) => {
  try {
    // Obtener el jwt que genera el usuario
    const jwtByUser = req.headers.authorization || '';
    if (!jwtByUser) {
      res.status(400).send("No token received");
      return;
    }
    // Separo el Bearer y el token solo devuelvo el token
    const jwt = jwtByUser.split(' ').pop()

    if (!jwt) {
      res.status(400).send("No Token provided");
      return;
    }
    const user = await userModel.findOne({ token: jwt })
    if (!user) return res.status(401).json({ message: "Do not have access" })
    const validUser = verifyToken(jwt)
    if (!validUser) {
      res.status(400).send("Token no válido");
    } else {
      req.user = validUser
      next();
    }
  } catch (error) {
    res.status(400)
    res.send('Sesión no valida')
  }

}

export { checkJWT }
