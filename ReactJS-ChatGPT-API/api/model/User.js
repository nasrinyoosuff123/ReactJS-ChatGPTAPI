const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        maxlength: 255,
        required: true
    },
    lastName: {
        type: String,
        maxlength: 255,
        required: true
    },
    email: {
        type: String,
        maxlength: 255,
        required: true,
        unique: true
    },
    NIC: {
        type: String,
        maxlength: 100,
        required: true,
        unique: true
    },
    phoneNo: {
        type: String,
        maxlength: 255,
        required: true,
    },
    address: {
        type: String,
        maxlength: 255,
        required: true,
    },
    gender: {
        type: String,
        maxlength: 20,
        required: true,
    },
    profession: {
        type: String,
        maxlength: 255,
        required: true,
    },
    country: {
        type: String,
        maxlength: 255,
        required: true,
    },
    education: [{
        type: String,
        required: true
    }]
})

const User = mongoose.model("User", userSchema);

exports.User = User;