import express from 'express'
import cors from 'cors'
import router from './routes/index.routes.js';


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/v1', router)

const httpServer = app.listen(PORT, () => console.log("Escuchando en el puerto 4000"))

// Start the server
// La conexion a la base de datos iria en otra parte
// async function startServer() {
//   try {
//     await mongoose()

//     app.listen(PORT, () => {
//       console.log(`Servidor Node.js en ejecución en el puerto ${PORT}`);
//     });
//   } catch (error) {
//     console.error(`Error al iniciar el servidor: ${error}`);
//   }
// }

// startServer();
