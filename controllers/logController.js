const User = require('../models/userModel.js');
const Exercise = require('../models/exerciseModel.js');

const getAllLogsForUser = async (req,res) => {
    console.log(req.query.from)
    console.log(req.query.to)
    console.log(req.query.limit)

    const user = await User.findById(req.params._id);
    const exercises = await Exercise.find({_id:req.params._id});

    const exercisesForAUser = [];

    for (let i = 0; i < exercises.length; i++) {
        exercisesForAUser.push(JSON.parse(JSON.stringify(exercises))[0])
    } 

    for(let i = 0; i < exercisesForAUser.length; i++){ 
        exercisesForAUser[i].date = new Date(exercisesForAUser[i].date).toDateString(); 
    }

    const username = user.username;
    const count = exercisesForAUser.length;
    const _id = req.params._id;
    const log = exercisesForAUser;

    const logObject = {username:username,count:count,_id:_id,log:log}; 

    //console.log(logObject)

    res.status(200).json(logObject);
}

module.exports = {
    getAllLogsForUser,
}