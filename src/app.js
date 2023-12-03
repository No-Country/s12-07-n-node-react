require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('./config/mongoDB');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Start the server
async function startServer() {
  try {
    await mongoose()

    app.listen(PORT, () => {
      console.log(`Servidor Node.js en ejecución en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error(`Error al iniciar el servidor: ${error}`);
  }
}

startServer();