const mongoose = require("mongoose");
const studentModel = require("../model/model");
const multer = require("multer");

//creacting function for our route

// creating the function for pictures
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./uploads");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const imageUpload = multer({ storage: storage }).single("picture");

// getting all student
const getStudent = async (req, res) => {
  try {
    const getAll = await studentModel.find();
    res.json(getAll);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//posting or creating to our database
const postStudent = async (req, res) => {
  try {
    const student = await studentModel.create({
      name: req.body.name,
      course: req.body.course,
      picture: req.file.path,
    });
    res.json({ student });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// getting all the data by id
const gettingAll = async (req, res) => {
  try {
    const getting = await studentModel.findById(req.params.id);
    res.json(getAll);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//deleting data by id  from our database

const deleteStudent = async (req, res) => {
  try {
    const del = await studentModel.findByIdAndDelete(req.body.id);
    res.status(200).json(del);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// delecting all student from our database

const delectingAll = async (req, res) => {
  try {
    const delAll = await studentModel.deleteMany();
    res.json({ message: "all student has been delected" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  postStudent,
  getStudent,
  gettingAll,
  delectingAll,
  deleteStudent,
  imageUpload,
};
