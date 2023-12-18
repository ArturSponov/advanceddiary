
// const { Router } = require('express');


const express = require('express');

const urlencodedParser = express.urlencoded({extended: false})
const app = express()
const Rauth = require('../controllers/auth')


const authRouter = express.Router()


authRouter.post("/registration", urlencodedParser,  Rauth.registration)
authRouter.get("/login", function(request, response) {
    response.render('classi.hbs')
}) 
// authRouter.get("/homeworkadmin", function(request, response) {
//     response.render('homework.hbs')
// })
authRouter.get("/homeworkadmin", urlencodedParser, Rauth.homeadmin)
authRouter.get("/homeworkadmin/:id", urlencodedParser, Rauth.delhomeadmin)
authRouter.get("/addhomework", function(request, response) {
    response.render("addhomework.hbs")
})
authRouter.post("/addhomework", urlencodedParser, Rauth.addhomework)

authRouter.post("/login", urlencodedParser,  Rauth.login)
// authRouter.post("/login", Rauth.login)
// authRouter.get("/login", function(req, res) {
//     res.render('classi.hbs')
// })
authRouter.get("/registration", function (req, res) {
    res.render('class.hbs')
})
authRouter.get('/homework', urlencodedParser, Rauth.homework)
authRouter.get('/addhomework', urlencodedParser, Rauth.addhomework)



module.exports = authRouter


