import mongoose from 'mongoose';


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO as string);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:awdaadaw', error);
  }
};

export default connectDB;
