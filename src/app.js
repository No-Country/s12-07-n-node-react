import express from 'express'
import cors from 'cors'
import router from './routes/index.routes.js';
import dotenv from 'dotenv'
import { mongoDB } from './config/mongoDB.js';
import handlebars from 'express-handlebars'
import __dirname from '../__dirname.js';

dotenv.config()


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handlebars

app.set('view engine', 'hbs')
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  defaultLayout: 'main',
  // handlebars: allowInsecurePrototypeAccess(Handlebars)
}))

app.use(express.static('public'))

// Middleware
app.use(cors({
  origin: '*',
  credentials: false,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['*'],
}));

app.use('/api/v1', router)
app.set('views', __dirname + '/src/views')
app.use('/', (req, res) => {
  res.redirect(301, '/api/v1');
});
// setup DB
await mongoDB()

const httpServer = app.listen(PORT, () => console.log("Escuchando en el puerto 4000 "))


