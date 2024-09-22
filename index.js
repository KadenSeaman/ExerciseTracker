const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser'); 

const mongoose = require('mongoose');

app.use(cors())
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//routes
const userRoute = require('./routes/userRoute.js')
const exerciseRoute = require('./routes/exerciseRoute.js');
const logRoute = require('./routes/logRoute.js');








app.use('/api/users', userRoute);
app.use('/api/users/:_id/exercises', exerciseRoute);
app.use('/api/user/:_id/logs', logRoute);

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/views/index.html')
});

try {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    const listener = app.listen(process.env.PORT || 3000, () => {
      console.log('Connected to mongoose database');
      console.log('Your app is listening on port ' + listener.address().port)
    })
  });
} catch (error) {
  console.log(error);
}

