const mongoose = require('mongoose');


const exerciseSchema = mongoose.Schema({
    _id:{
        type: String,
        required: true,
    },
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
},{
    timestamps:true
});

const Exercise = mongoose.model('exercise', exerciseSchema);

module.exports = Exercise;  