const mongoose = require('mongoose');
const schema = mongoose.Schema;

const mentorSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    expertise: {
        type: String,
        required: true,
    },
    studentsAssigned: [
        {
            type: schema.Types.ObjectId,
            default: null,
            ref: "student"
        },
    ],
});

module.exports = mongoose.model("Mentor", mentorSchema);


