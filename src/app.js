import express from 'express'
import cors from 'cors'
import router from './routes/index.routes.js';
import dotenv from 'dotenv'
dotenv.config()


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/v1', router)

const httpServer = app.listen(PORT, () => console.log("Escuchando en el puerto 4000 "))


