import mongoose from "mongoose";

interface connectedOptions extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

const options: connectedOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDatabase = async () => {
  const connectionUrl: string = process.env.DB_URL as string;
  mongoose
    .connect(connectionUrl, options)
    .then(() => console.log(`Database connected successfully`))
    .catch((err) =>
      console.log("Getting Error from DB connection" + err.message),
    );
  mongoose.set("strictQuery", false);
};

export default connectToDatabase;
