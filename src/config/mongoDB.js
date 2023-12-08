import { createConnection } from 'mongoose';

export async function mongoDB() {
  try {
    const DB_URI = process.env.MONGO_URI

    const db = createConnection(DB_URI, {
    });

    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', () => {
      console.log('Database connected successfully');
    });

    return db;
  } catch (error) {
    console.error('Error! \nError connecting to the database:', error);
    throw error;
  }
}

