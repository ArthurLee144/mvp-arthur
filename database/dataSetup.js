var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mech');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('successful connection')
})

var taskSchema = mongoose.Schema({
  year: String,
  make: String,
  model: String,
  task: String,
  tools: String,
  notes: String,
  url: String
})

var taskModel = mongoose.model('Task', taskSchema);

var save = (obj, callback) => {
  var task = new taskModel(obj);
  task.save((err, data) => {
    if(err) {console.log('error', err)}
  })

  callback()
}

var getEntry = (yearInput, modelInput, makeInput, taskInput) => {
  return taskModel.find({
    year: yearInput,
    model: modelInput,
    make: makeInput,
    task: taskInput}, function(err, data) {
      return data;
    })
}

module.exports.save = save;
module.exports.getEntry = getEntry;