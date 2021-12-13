const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    BVN: {
        type: Number,
        required: true
    },
    EmailAddress: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    userProfile: {
        type: Object,
        array: false,
        date: {
            type: Date,
            default: Date.now
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('users', signupSchema);