const express = require('express');

const urlencodedParser = express.urlencoded({extended: false})
const app = express()
const Rauth = require('../controllers/feedback')


const feedbackRouter = express.Router()
feedbackRouter.get('/add', function (req, res) {
    res.render('feedback.hbs')
})
feedbackRouter.post('/add', urlencodedParser, Rauth.Feedbacks)
module.exports = feedbackRouter;