const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActiveInvestmentSchema = new Schema({
    accountType: String,
    userProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    },
    cards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Card"
        }
    ]
})


module.exports = mongoose.model("UserProfile", ActiveInvestmentSchema);