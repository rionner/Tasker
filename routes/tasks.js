var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Task = require('../models/Tasks');

// get /api/tasks
router.get('/', function(req, res, next) {
  console.log(req.body);
  Task.find(function(error, tasks) {
    res.json(tasks);
  });
});

// GET /api/tasks/:id
// localhost:5000/api/tasks/0392092-049-2940-2394-2309
router.get('/:id', function(req, res, next) {
  Task.findById(req.params.id, function(err, task) {
    res.json(task);
  });
});

// POST /api/tasks
router.post('/', function(req, res, next) {
  console.log(req.body);
  Task.create(req.body, function(err, task) {
    res.json(task);
  });
});

// PUT - UPDATE /api/tasks/:id
router.put('/:id', function(req, res, next){
  console.log(req.body);
  Task.findByIdAndUpdate()
});

// DELETE /api/tasks/:id
router.delete('/:id', function(req, res, next){
  Task.findByIdAndRemove(req.params.id, req.body, function(err, task){
    res.send('Your task has been deleted');
  })
})


module.exports = router;
