require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const studentModel = require("./model/model");

const port = 3490;

// creating an object instance
const app = express();

//connecting to the mongodb atlass

mongoose.connect(process.env.DATABASE_URL, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection
  .once("open", () => {
    console.log("connected successfully....");
  })
  .on("error", () => {
    console.log("error occured");
  });

//enabling our responds to be returned in json format
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("listening");
});
