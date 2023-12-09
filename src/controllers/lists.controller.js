// mockkup de ruta para listas d epeliculas favoritas, fue utlilzado para el testeo de middlewares, luego podemos expandir en esto

export const listController = async (req, res) => {
  res.json({ message: "Tienes acceso" })
}
