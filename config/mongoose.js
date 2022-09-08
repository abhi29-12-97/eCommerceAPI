import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/productsApi");
const db = mongoose.connection;

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

export default db;
