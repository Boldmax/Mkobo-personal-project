const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cards = new Schema({
    banks_card: [
        {
            bank_name: { String, required: true },
            account_number: { Number, required: true },
            name: { String, required: true },
            card_number: { Number, required: true },
            card_expiry_date: { String, required: true },
        }
    ],
    account_details: [
        {
            name: { String, required: true },
            account_number: { Number, required: true },
            bank_name: { String, required: true }
        }
    ],
    investment_details: [
        {
            investment_type: { String, required: true },
            tenure: { String, required: true},
            rate: { Number, required: true},
            
        }
    ],
    userProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account"
    }

})


module.exports = mongoose.model("Card", ActiveInvestmentSchema);