import pkg from "jsonwebtoken"


const JWT_SECRET = process.env.JWT_SECRET
const { sign } = pkg
const generateToken = async (id) => {
  const jwt = sign({ id }, JWT_SECRET)
  return jwt
}

const verifyToken = (jwt) => {
  console.log(JWT_SECRET)
  const { verify } = pkg

  const isValid = verify(jwt, JWT_SECRET)
  return isValid
}

export { generateToken, verifyToken }
