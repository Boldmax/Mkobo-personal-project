const mongoose = require('mongoose');

const nextOfKinSchema = new mongoose.Schema({
    fisrt_name:{type: String, required: true},
    last_name: {type: String, required: true},
    relationship: {type: String, required: true},
    phone_number: {type: Number, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    userProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account"
    }
})

module.exports = mongoose.model("nextofkin", nextOfKinSchema);