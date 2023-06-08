const express = require("express");
const router = express.Router();

const { getStudent, createStudent } = require("../Controllers/StudentControll");

router.get("/student", getStudent);

router.post("/createStudent", createStudent);

module.exports = router;

