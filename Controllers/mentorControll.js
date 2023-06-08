const mentor = require("../Modules/Mentor");


exports.getMentor =  (req, res) => {
    console.log("get all mentors");
    try {
         mentor.find((err, data) => {
            if (err) {
                return res.status(400).send({ message: 'Error while retrieving Mentor Data.' })
            }
            res.status(200).send(data);
        });     
    } catch (err) {
        res.status(500).send(err,{ message: "Internal Server Error" })
    }
};


exports.getMentorId =  (req, res) => {
    console.log("show all students for particular mentor");
    try {
         mentor.findById({ _id: req.params.id }, (err, data) => {
            if (err) {
                return res.status(400).send({ message: 'Error while retrieving Mentor Data.' })
            }
            res.status(200).send(data);
        })        
    } catch (err) {
        res.status(500).send({ message: "Internal Server Error" })
    }
};



exports.createMentor =  async (req, res) => {
    console.log("mentor create route");
    try {
        const payload = req.body;
        let newMentor = new mentor(payload);
        await newMentor.save((err, data) => {
            if (err) {
                return res.status(400).send({ message: 'Error while Create Mentors.' })
            }
            res.status(200).send({ MentorId: data._id, message: 'Mentor has been Created successfully' })
        })    
    } catch (err) {
        res.status(500).send({ message: "Internal Server Error", err });
    }
}
