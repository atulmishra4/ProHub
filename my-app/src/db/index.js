import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let isConnected = false;

export async function connectToDatabase() {
    if (isConnected) {
        return;
    }
    try {
        const connection = await mongoose.connect(MONGODB_URI);
        isConnected = true;
        console.log("Connected to MongoDB: ", connection.connection.host);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
        process.exit(1);
    }
}