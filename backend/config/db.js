// Import dependencies
import mongoose from "mongoose";

// Define database connection function
const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log successful connection
    console.log("MongoDB connected");
  } catch (error) {
    // Log error message
    console.error(`MongoDB connection error: ${error}`);
    process.exit(1);
  }
};

// Export connection function
export default connectDB;
