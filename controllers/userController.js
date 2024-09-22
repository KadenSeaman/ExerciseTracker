const User = require('../models/userModel.js')

const createUser = async (req,res) => {   
    try {
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);    
    } catch (error) {
        res.status(500).json({message:'Error creating new user'});
    }
}

const getAllUsers = async (req,res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({message:'Error finding users'});
    }
}


module.exports = {
    createUser,
    getAllUsers,
}