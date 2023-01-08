import mongoose from "mongoose";

/*
  * 0 = disconnected
  * 1 = connected
  * 2 = connecting
  * 3 = disconnecting
*/

const mongoConnection = {
  isConnected: 0
}

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log('App connected to database!!');
    return;
  }
  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      console.log('Using previous connection');
      return;
    }

    await mongoose.disconnect();
  }

  const DB_URL = process.env.MONGO_URL
  await mongoose.connect(DB_URL || '');
  mongoConnection.isConnected = 1;
  console.log('Connected to MongoDB:', DB_URL);
}

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;

  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  mongoConnection.isConnected = 0;
  console.log('Disconnecting the database');
}