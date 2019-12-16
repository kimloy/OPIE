const mongoose = require('mongoose');

const formSchema =  mongoose.Schema({
  Pid: {type: String, required: true},
  dv: {type: String, required: true},
  gender: {type: String, required: true},
  age: {type: String, required: true},
  FN: {type: String, required: true},
  LN: {type: String, required: true},
  speed1: {type: String, required: true},
  speed2: {type: String, required: true},
  speed3: {type: String, required: true},
  time1: {type: String, required: true},
  time2: {type: String, required: true},
  time3: {type: String, required: true},
  assistD1: {type: String, required: true},
  assistD2: {type: String, required: true},
  assistD3: {type: String, required: true},
  Assistance: {type: String, required: true}
});

module.exports = mongoose.model('Form', formSchema);
