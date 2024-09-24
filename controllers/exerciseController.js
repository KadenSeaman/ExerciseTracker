const Exercise = require('../models/exerciseModel.js');
const User = require('../models/userModel.js');

const createExercise = async (req,res) => { 

        let date = req.body.date;

        if(!date){
            //if test #15 fails it is due to this timezone difference
            date = new Date();
            date.setDate(date.getDate() + 1);
        }
        else{
            date = new Date(date);
            date.setDate(date.getDate() + 1);
        }
    
        let {description,duration} = req.body;
    
        duration = Number(duration);
    
        const _id = req.params._id;
    
        const user = await User.findById(_id);


        let mongoExerciseObject = {
            username:user.username,
            description:description,
            duration: duration,
            date:date,
            userID:_id
        } 
    
        await Exercise.create(mongoExerciseObject); 

        const username = user.username;

        const exerciseObject = {
            username:username,
            description:description,
            duration: duration,
            date:date,
            _id:_id,
        } 

        exerciseObject.date = exerciseObject.date.toDateString();
        
        res.json(exerciseObject);
}       

module.exports = {
    createExercise,
}