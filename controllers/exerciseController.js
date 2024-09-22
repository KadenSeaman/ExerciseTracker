const Exercise = require('../models/exerciseModel.js');
const User = require('../models/userModel.js');

const createExercise = async (req,res) => { 

    try {
        let date = req.body.date;

        if(!date){
            date = new Date();
        }
        else{
            date = new Date(date);
            date.setDate(date.getDate() + 1);
        }
    
        date = date.toDateString();
    
        let {description,duration} = req.body;
    
        duration = Number(duration);
    
        const _id = req.params._id;
    
        const user = await User.findById(_id);
        const username = user.username;
    
        const exerciseObject = {
            username:username,
            description:description,
            duration: duration,
            date:date,
            _id:_id,
        } 
    
        const exercise = await Exercise.create(exerciseObject); 
        
        res.status(200).json(exerciseObject);
    
    } catch (error) {
        res.status(500).json({message:"error creating a new exercise"})
    }
}       

module.exports = {
    createExercise,
}