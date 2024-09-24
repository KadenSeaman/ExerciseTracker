const mongoose = require('mongoose');

const userSchema = mongoose.Schema({  
    username: {
        type: String,
        required: [true, "Please enter in a username"]
    },
});

const User = mongoose.model('user',userSchema);

module.exports = User;