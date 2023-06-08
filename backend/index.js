require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./Database/Mongoose");
db();



const studentRoute = require("./Routes/students");
const mentorRoute = require("./Routes/mentor");
const mentortoStudent = require("./Routes/mentortoStudent");


app.use(express.json());``
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Backend Mentor")
});


app.use("/api", studentRoute);
app.use("/api", mentorRoute);
app.use("/api", mentortoStudent);


const PORT = process.env.PORT || 6001;

app.listen(PORT, () => {
  console.log(`App Running on PORT ${PORT}`);
});


// app.use(express.urlencoded({ extended: false }));






