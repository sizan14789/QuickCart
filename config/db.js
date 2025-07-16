import mongoose from 'mongoose';

let isConnected = false; 

const connectDB = async () => {
  if (isConnected) {
    console.log('MongoDB already connected');
    return;
  }

  if (!process.env.MONGO) {
    throw new Error("MONGO environment variable is not defined");
  }

  try {
    const db = await mongoose.connect(process.env.MONGO, {
      dbName: 'quickcart',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); 
  }
};

export default connectDB;