import express from "express";
import router from "./routes/index.js";

import db from "./config/mongoose.js";
//initiallising express app
const app = express();
//setting up Dynamic port
const port = process.env.PORT || 3000;
app.use(express.json());

//using index.js file from router for the routes
app.use("/products", router);
//making appp listen to the port
app.listen(port, (err) => {
  if (err) {
    console.log("port error", err);
  }
  console.log("connected to port", port);
});
