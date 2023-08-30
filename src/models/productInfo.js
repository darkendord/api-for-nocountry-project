const { text } = require("express");
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    product_name:{
        type: String,
        required: true
    },
    balance:{
        type: Number,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    },
    product_type:{
        type: String,
        required: true
    },
    product_number:{
        type: Number,
        required: true
    },
    expirationDate:{
        type: String,
        required: true
    },
    activities:{
        type: Array,
        required: false
    }
});

module.exports = mongoose.model("Product", productSchema)