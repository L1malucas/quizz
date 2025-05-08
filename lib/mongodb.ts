import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid or missing environment variable: "MONGODB_URI"');
}

const connectionUri = process.env.MONGODB_URI;

let cached: { conn: mongoose.Mongoose | null; promise: Promise<mongoose.Mongoose> | null } = {
  conn: null,
  promise: null,
};

async function dbConnect(caller: string = 'unknown'): Promise<mongoose.Mongoose> {
  console.log(`[${new Date().toISOString()}] dbConnect called by: ${caller}, cached.conn: ${!!cached.conn}, cached.promise: ${!!cached.promise}`);
  
  if (cached.conn) {
    console.log('Returning cached connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 30000,
    };

    console.log(`Connecting to MongoDB with URI: ${connectionUri}`);
    cached.promise = mongoose.connect(connectionUri, opts).then((mongooseInstance) => {
      console.log('MongoDB connection established');
      return mongooseInstance;
    }).catch((error) => {
      console.error('MongoDB connection error:', error);
      cached.promise = null; 
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log('Connection returned');
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error('Error awaiting connection:', error);
    throw error;
  }
}

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

if (process.env.NODE_ENV === 'development') {
  process.on('SIGTERM', async () => {
    console.log('Closing MongoDB connection');
    await mongoose.disconnect();
    cached.conn = null;
    cached.promise = null;
  });
}

export default dbConnect;