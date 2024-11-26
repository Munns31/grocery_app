import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://munna:1234567890@cluster0.eqwus.mongodb.net/grocery_app"
    )
    .then(() => console.log("connect DB"));
};
