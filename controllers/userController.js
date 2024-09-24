const User = require('../models/userModel.js')

const createUser = async (req,res) => {   
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);    
    } catch (error) {
        res.json({message:'Error creating new user'});
    }
}

const getAllUsers = async (req,res) => {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    } catch (error) {
        res.json({message:'Error finding users'});
    }
}


module.exports = {
    createUser,
    getAllUsers,
}