const { createConnection } = require('mongoose');

async function mongoDB() {
  try {
    const DB_URI = 'mongodb+srv://NoCountry:h3Llo.$2f@cluster0.eiazo8b.mongodb.net/?retryWrites=true&w=majority';

    const db = await createConnection(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', () => {
      console.log('Connected successfully');
    });

    return db;
  } catch (error) {
    console.error('Error! \nError connecting to the database:', error);
    throw error;
  }
}

module.exports = mongoDB;