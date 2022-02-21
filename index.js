const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology:true })
  .then(() => {
    console.log("DB conected succesfully");
  })
  .catch((err) => console.log(err));


app.listen(5050, () => {
  console.log("Backend Server is Running on port 5050");
});
