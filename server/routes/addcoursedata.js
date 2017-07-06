var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var addcourse = require('../models/addcourse.js');


/* GET /Addcurse listing. */

router.get('/', function(req, res, next) {
  addcourse.find(function(err, addcoursedata) {
    if (err) return next(err);
    res.json(addcoursedata);
    console.log(addcoursedata);
  });
});

router.get('/:id', function(req, res, next) {
  addcourse.find({ Create_Username: req.params.id } ,function(err, saddcoursedata) {
    if (err) return next(err);
    res.json(addcoursedata);
    console.log(addcoursedata);
  });
});

router.post('/', function(req, res, next) {
  addcourse.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
 addcourse.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  addcourse.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
