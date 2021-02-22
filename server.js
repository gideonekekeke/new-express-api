require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { imageUpload } = require("./controller/controller");
const studentModel = require("./model/model");
const callRoute = require("./router/router");

const port = 4000;

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
    console.log("there is a big fatal error here");
  });

//enabling our responds to be returned in json format
app.use(express.json());
app.use("/api/students", imageUpload);
app.use("/api", callRoute);

app.listen(process.env.PORT, () => {
  console.log("listening");
});
