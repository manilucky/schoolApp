const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const db = require('../models/list.js');


/* GET api listing. */
router.get('/', (req, res,next) => {
  res.send('api works');
});


module.exports = router;
