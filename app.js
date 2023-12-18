
const path=require('path')
const express = require("express");
const { resolve } = require('path')
const hbs = require('hbs')
let currentDate = new Date();
global.date = currentDate
const app = express();
const fs = require('fs');
const { response } = require('express');
const feedbackRouter = require('./routs/feedback');

app.use(express.static(path.resolve(__dirname + '/public')))  
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose")
const urlencodedParser = express.urlencoded({extended: false})
const keys = require('./config/bd')
mongoose.connect(keys.mongoUrl)  
.then(()=> console.log('поключено'))
.catch(error=> console.log(error))
app.set("view engine", "hbs");  
app.use('/feedback', feedbackRouter)

app.get('/', function(req,res) {
    res.render('main.hbs')
})

app.listen(3000, function() {
    console.log('сервер запущен')
})