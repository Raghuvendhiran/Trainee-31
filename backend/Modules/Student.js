const mongoose = require('mongoose');
const schema = mongoose.Schema;

const studentSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    course: {
        type: String,
        required: true,
    },
    mentorAssigned: {
        type: schema.Types.ObjectId,
        default: null,
        ref: "mentor",
    },
});

module.exports = mongoose.model("student", studentSchema);

