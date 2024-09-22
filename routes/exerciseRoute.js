const express = require('express');
const { createExercise } = require('../controllers/exerciseController');

const router = express.Router({mergeParams:true});

router.post('/',createExercise);

module.exports = router;