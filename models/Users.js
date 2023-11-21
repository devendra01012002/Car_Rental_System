const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    gmail: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    Phone: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
});

const userModel = mongoose.model('User', userSchema)

module.exports = userModel;