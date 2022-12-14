import dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "videos",
  MONGO_USER: process.env.MONGO_USER || "martin_reym",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "martin1234",
  MONGO_HOST: process.env.MONGO_HOST || "localhost",
  PORT: process.env.PORT || 4000,
};
