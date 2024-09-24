const User = require('../models/userModel.js');
const Exercise = require('../models/exerciseModel.js');
const { response } = require('express');

const getAllLogsForUser = async (req,res) => {

    let logs = await Exercise.find({userID:req.params._id});

    logs = JSON.parse(JSON.stringify(logs));

    logs.forEach(log => {
        log.date = new Date(log.date).toDateString();
    })

    if(req.query.from || req.query.to){
        logs = logs.filter(log => {
            const fromDate = new Date(req.query.from).getTime();
            const toDate = new Date(req.query.to).getTime();
            const logDate = new Date(log.date).getTime();
            return logDate <= toDate && logDate >= fromDate;
        })
    }

    if(req.query.limit){
        logs = logs.slice(0,req.query.limit);
    }


    const log = {
        username: logs[0].username,
        count: logs.length,
        _id: logs[0].userID,
        log: logs
    }

    res.json(log)
}

module.exports = {
    getAllLogsForUser,
}