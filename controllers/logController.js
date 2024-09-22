const Log = require('../models/logModel.js');

const getAllLogsForUser = async (req,res) => {
    try {
        const logs = await Log.find({_id:req.params._id}); 
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({message:'Error getting all logs'});
    }
}

const createLog = async (req,res) => {
    
}

module.exports = {
    getAllLogsForUser,
}