import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: "SHOWROOM"
  })
  .then(() => {
    console.log("Connected to database successfully!");
  })
  .catch((err) => {
    console.log(`Some error occurred while connecting to Database! ${err}`);
  });
};
