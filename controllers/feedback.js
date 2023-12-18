
const express = require('express')
const Feedbacks = require('../schema/feedback')
module.exports.Feedbacks = async function (req, res) {
        try {
           const feedback = new Feedbacks({
            Title: req.body.Title,
            option: req.body.Option
    
           })
        const collection = await feedback.save().then( () => res.render('feedback.hbs', {
            Visible: true,
             messagge: 'Спасибо за ваше предложение!'
            })  ) 
        } catch(err){
                console.log(err);
                response.sendStatus(500);
            } 
}