import express from "express";
import router from "./routes/index.js";
import db from "./config/mongoose.js";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/products", router);

app.listen(port, (err) => {
  if (err) {
    console.log("port error", err);
  }
  console.log("connected to port", port);
});
