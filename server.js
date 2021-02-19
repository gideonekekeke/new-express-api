require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const studentModel = require("./model/model");

const port = 3490;

// creating an object instance
const app = express();

//enabling our responds to be returned in json format
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("listening");
});
