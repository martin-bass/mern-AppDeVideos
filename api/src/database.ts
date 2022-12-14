import mongoose from "mongoose";
import config from "./config";

const dbConecting = async () => {
  try {
    const db = await mongoose.connect(
      `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.tfjbftd.mongodb.net/${config.MONGO_DATABASE}?retryWrites=true&w=majority`
    );
    console.log("database conected to:", db.connection.name);
  } catch (error) {
    console.log(error);
  }
};

dbConecting();
