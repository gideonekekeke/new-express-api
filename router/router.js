const express = require("express");
const {
  postStudent,
  getStudent,
  gettingAll,
  delectingAll,
  deleteStudent,
  imageUpload,
} = require("../controller/controller");
const router = express.Router();

router.get("/students", getStudent);
router.post("/students", postStudent);
router.delete("/students", delectingAll);

router.get("/students/:id", gettingAll);
router.delete("students/:id", delectingAll);

module.exports = router;
