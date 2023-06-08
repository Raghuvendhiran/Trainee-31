const express = require("express");
const router = express.Router();

const { getMentor, getMentorId, createMentor } = require("../Controllers/mentorControll");


router.get("/mentor", getMentor);

router.get("/mentor/:id", getMentorId);

router.post("/createMentor", createMentor);


module.exports = router;


// const { mentor } = require("../shared/db");