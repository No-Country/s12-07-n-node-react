const { connect, connection } = require('mongoose');

async function mongoDB() {
  try {
    const DB_URI = process.env.DB_URI;

    await connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = connection;
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