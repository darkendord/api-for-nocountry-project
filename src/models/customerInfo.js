const { text } = require("express");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    secretPin:{
        type: Number,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    profileStatus:{
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema)