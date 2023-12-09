import express from 'express'
import cors from 'cors'
import router from './routes/index.routes.js';
import dotenv from 'dotenv'
dotenv.config()
import { mongoDB } from './config/mongoDB.js';


const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware
app.use(cors({
  origin: [
    'https://s12-07-n-node-react.vercel.app/',
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/api/v1', router)

await mongoDB()

const httpServer = app.listen(PORT, () => console.log("Escuchando en el puerto 4000 "))


