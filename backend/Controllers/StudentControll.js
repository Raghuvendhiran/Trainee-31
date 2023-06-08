const student = require("../Modules/Student");


exports.getStudent = (req, res) => {
    console.log("get all Students");
    try {
        student.find((err, data) => {             
            if (err) {
                return res.status(400).send({ message: 'Error while retrieving Student Data.' })
            }
            res.status(200).send(data);
        });
    } catch (err) {
        res.status(500).send({ message: "Internal Server Error" })
    }
};



exports.createStudent = async (req, res) => {
    console.log("Student create route");
    try {
        const data = await student.create({
            name: req.body.name,
            email: req.body.email,
            course: req.body.course,
            mentorAssigned: req.body.mentorAssigned,
        });
        res.send(data);
    } catch (err) {
        res.status(500).send({ message: "Internal Server Error", err });
    }
}
