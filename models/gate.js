let mongoose = require('mongoose');

// Gate Schema
let gateSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  }
});

let Gate = module.exports = mongoose.model('Gate', gateSchema);