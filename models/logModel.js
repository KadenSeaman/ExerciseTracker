const mongoose = require('mongoose');


const logSchema = mongoose.Schema({
    username: String,
    count: Number,
    _id: String,
    log: [{
      description: String,
      duration: Number,
      date: String
    }]
});

const Log = mongoose.model('log',logSchema);

module.exports = Log;