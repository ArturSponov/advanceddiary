const mongoose = require("mongoose")
const Schema = mongoose.Schema
// const express = require("express")
const feedbackSchema = new Schema({
    Title:{
        type: String,
        required: true
    },
    option:{
        type: String,
        required: true
    },
})
module.exports = mongoose.model('feedbacks', feedbackSchema)