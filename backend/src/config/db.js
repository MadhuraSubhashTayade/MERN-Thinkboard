import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Successfully connected to MongoDB !");
  } catch (error) {
    console.error("Error while connecting to MongoDB, ", error);
    process.exit(1); // exit with failure, 1=failure, 0=success
  }
};
