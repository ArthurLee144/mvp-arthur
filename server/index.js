const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios');
var path = require('path');
var db = require('../database/dataSetup.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
console.log(__dirname + '/../')
console.log('hello')
app.use(express.static(__dirname + '/../'));
// app.use(express.static(__dirname + '/../client/static'));


// var postDb = (year, make, model, task, tools, notes, url) => {
//   console.log('postDb was called!!!');
// }

app.post('/guides', function(req, res) {
  console.log('request from client', req.body)
  var fields = {
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    task: req.body.task,
    tools: req.body.tools,
    notes: req.body.notes,
    url: req.body.url
  }
  db.save(fields, function() {
    res.end('Task has been saved')
  });
})

app.get('/guides', function(req, res) {
  console.log('search request from client', req.query);

  db.getEntry(req.query.year, req.query.model, req.query.make, req.query.task).then((results) => {
      res.send(JSON.stringify(results))
    })


})





let port = 8888;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});