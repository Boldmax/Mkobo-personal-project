const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    BVN:{
        type:Number,
        required:true
    },
    EmailAddress:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('signup', signupSchema);