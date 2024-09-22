const express = require('express');
const router = express.Router();

const {createUser, getAllUsers} = require('../controllers/userController.js')

//create user
router.post('/', createUser); 

//get all users 
router.get('/',getAllUsers)

module.exports = router;

