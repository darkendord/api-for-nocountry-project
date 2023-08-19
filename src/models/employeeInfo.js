const { text } = require("express");
const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    employeeId:{
        type: String,
        required: true
    },
    employeeEmail:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Employee", employeeSchema)