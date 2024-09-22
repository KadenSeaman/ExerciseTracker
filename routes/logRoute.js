const express = require('express');
const {getAllLogsForUser} = require('../controllers/logController.js');
const router = express.Router({mergeParams:true});

router.get('/',getAllLogsForUser);

module.exports = router;