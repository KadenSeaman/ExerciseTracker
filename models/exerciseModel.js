const mongoose = require('mongoose');


const exerciseSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
    },
    userID: String
});

const Exercise = mongoose.model('exercise', exerciseSchema);

module.exports = Exercise;  