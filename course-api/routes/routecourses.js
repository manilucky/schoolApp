var express =require('express');
var router = express.Router();

var mongoose = require ('mongoose');
var course = require('../models/course.js');

/* ***********GET /routecourses listing.*********** */
router.get('/', function(req, res, next) {
  //res.send('I am in courses router');
  course.find(function (err, routecourses) {
    if (err) return next(err);
    res.json(routecourses);
  });
});
module.exports = router;


/* ****** POST ****** */
router.post('/', function(req, res, next) {
  course.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

 /****** GET /routecourses/:id******/ 
router.get('/:id', function(req, res, next){
  course.find(req.params.id, function (err, post){
    if (err) return next (err);
    res.json(post);
  });
});

/******PUT /routecourses/:id ************/
router.put('/:id', function(req, res, next) {
  course.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}); 