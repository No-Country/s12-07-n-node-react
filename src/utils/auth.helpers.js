import { hash, compare } from "bcrypt";
const encryptPassword = async (password) => {
  const passwordHash = await hash(password, 10);
  return passwordHash
}
const isPasswordVerified = async (password, passHash) => {
  const isCorrect = await compare(password, passHash)
  return isCorrect
}

function validateEmail(mail) {
  // Expresión regular para validar correos electrónicos
  var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Devuelve true si el correo cumple con la expresión regular, de lo contrario, devuelve false
  return regexCorreo.test(mail);
}



export { encryptPassword, isPasswordVerified, validateEmail }
