var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var signup = require('../models/signup.js');


/* GET /signup listing. */

router.get('/', function(req, res, next) {
  signup.find(function(err, signupdata) {
    if (err) return next(err);
    res.json(signupdata);
    console.log(signupdata);
  });
});

router.get('/:id', function(req, res, next) {
  signup.find({ Create_Username: req.params.id } ,function(err, signupdata) {
    if (err) return next(err);
    res.json(signupdata);
    console.log(signupdata);
  });
});



router.post('/', function(req, res, next) {
  signup.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  signup.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  signup.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
