const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios');
var path = require('path');


app.use(express.static(__dirname + '/../client/static'));


// app.get('/static/App.js', function(req, res) {
//   res.end();
// })






let port = 8888;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});