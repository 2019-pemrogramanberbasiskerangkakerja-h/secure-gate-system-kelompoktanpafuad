const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
    nrp:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);