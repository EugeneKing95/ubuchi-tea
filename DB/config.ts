import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const connectionUrl: string = process.env.DB_URL as string;

    if (!connectionUrl) {
      throw new Error("Database URL not provided in environment variables");
    }

    await mongoose.connect(connectionUrl);

    mongoose.set("strictQuery", false);

    console.log("Database connected successfully");
  } catch (err: any) {
    console.error("Error connecting to DB:", err.message);

    process.exit(1); // Exit process if DB connection fails
  }
};

export default connectToDatabase;
