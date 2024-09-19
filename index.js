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

mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({  
  username: String,
  _id: String
});

const exerciseSchema = new mongoose.Schema({
  username: String,
  description: String,
  duration: Number,
  date: String,
  _id: String
});

const logSchema = new mongoose.Schema({
  username: String,
  count: Number,
  _id: String,
  log: [{
    description: String,
    duration: Number,
    date: String
  }]
});

const user = mongoose.model("user", userSchema);

app.get('/', (res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/api/users', (req, res) => {
  const reqUsername = req.body.username;
  const reqID = new mongoose.Types.ObjectId();

  const newUserObject = {username: reqUsername, _id: reqID};
  const newUser = new user(newUserObject);

  newUser.save()
  .then(newUser => {
    res.json(newUser);
  });
});
app.get('/api/users', (req, res) => {
  user.find()
  .then((userArray) => {
    console.log(userArray);
  })

  return res.json({});
});





const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
