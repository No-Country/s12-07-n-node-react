import { validateEmail } from "../utils/auth.helpers.js";

function validateAlphanumericWithSpecialChars(value, minLength, maxLength) {
  const regex = /^[a-zA-Z0-9',.\-]+$/;
  return typeof value === 'string' && value.length >= minLength && value.length <= maxLength && regex.test(value);
}

function validateNumeric(value, maxLength, minLength) {
  const regex = /^\d+$/;
  return typeof value === 'string' && value.length <= maxLength && value.length >= minLength && regex.test(value);
}


const checkRegisterForm = async (req, res, next) => {


  const { name, surname, mail, password, phone } = req.body
  if (!name || !surname || !mail || !password || !phone) return res.json({ message: " Error: Hay campos faltantes." })

  if (!validateEmail(mail)) return res.status(400).json({ message: "Ingresa un mail valido" })
  if (!validateAlphanumericWithSpecialChars(name, 3, 20)) {
    return res.status(400).json({ error: 'El nombre no es válido, debe tener entre 3 y 20 caracteres.' });
  }

  // Validación para el campo Apellido
  if (!validateAlphanumericWithSpecialChars(surname, 3, 20)) {
    return res.status(400).json({ error: 'El apellido no es válido,  debe tener entre 3 y 20 caracteres.' });
  }

  // Validación para el campo Teléfono
  if (!validateNumeric(phone, 15, 8)) {
    return res.status(400).json({ error: 'El teléfono no es válido, tienen que ser numeros enteros y  debe tener entre 8 y 15 digitos' });
  }

  // Validación para el campo Contraseña
  if (!validateAlphanumericWithSpecialChars(password, 8, 12)) {
    return res.status(400).json({ error: 'La contraseña no es valida, debe contener caracteres validos y  debe tener entre 8 y 12 caracteres ' });
  }

  // Si todas las validaciones pasan, continúa con la ejecución
  next();

}


const checkLoginForm = async (req, res, next) => {


  const { mail, password } = req.body
  if (!mail || !password) return res.json({ message: "Error: Hay campos faltantes." })

  if (!validateEmail(mail)) return res.json({ message: "Ingresa un mail valido" })

  // Si todas las validaciones pasan, continúa con la ejecución
  next();

}



export { checkRegisterForm, checkLoginForm }
