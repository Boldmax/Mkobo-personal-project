const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserProfileSchema = new Schema({
    BVN: { type: Number, required: true },
    fisrt_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, required: true },
    date_of_birth: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    nextOfKin: {
        type: Object,
        array: false,
        date: {
            type: Date,
            default: Date.now
        }
    },
    active_investment:
        [
            {
                type: Object,
                date: {
                    type: Date,
                    default: Date.now
                }
            }
        ],
    registration: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    date: {
        type: Date,
        default: Date.now
    }
})



module.exports = mongoose.model("account", UserProfileSchema);