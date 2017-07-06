var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var list = require('../models/list.js');


/* GET /course listing. */

router.get('/', function(req, res, next) {
  list.find(function(err, datalist) {
    if (err) return next(err);
    res.json(datalist);
  });
});

router.get('/:id', function(req, res, next) {
  list.find({ Course_Name: req.params.id } ,function(err, datalist) {
    if (err) return next(err);
    res.json(datalist);
  });
});

router.post('/', function(req, res, next) {
  list.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  list.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  list.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
