var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mech');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('successful connection')
})

var taskSchema = mongoose.Schema({
  year: Number,
  make: String,
  model: String,
  task: String,
  tools: String,
  notes: String,
  url: String
})