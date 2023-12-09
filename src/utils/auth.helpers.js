import { hash, compare } from "bcrypt";

const encryptPassword = async (password) => {

  const passwordHash = await hash(password, 10);
  return passwordHash

}

const isPasswordVerified = async (password, passHash) => {

  const isCorrect = await compare(password, passHash)
  return isCorrect

}

export { encrypt, verified }
