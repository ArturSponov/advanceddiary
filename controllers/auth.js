const express = require('express')
const Users = require('../schema/user')
const Homeworks = require('../schema/homeworks')
module.exports.registration = async function (request, response) {

    try{
   
       const user = new Users({
        name: request.body.Login,
        age: request.body.pass,
        role: 'user'

       })
      
        const users = await Users.findOne({name: request.body.Login})
        // console.log(users);
        if (users){
            console.log('такой пользователь есть')
            response.render('class.hbs', {
                Visible: true,
                message: 'Такой пользователь уже существует'
            })
        } else {
            const collection = user.save().then(() => console.log('пользователь сохранен'))
            response.render('class.hbs', {
                Visible: true,
                message: 'Пользователь сохранен'
            })
        }

        // console.log(request.body)

  
        

        
    }
    catch(err){
        console.log(err);
        response.sendStatus(500);
    }  

   
}
module.exports.login =  async function (request, response) {
    // console.log(request.body)
    try{
  
        const users = await Users.findOne({name: request.body.Login, age: request.body.pass})
        console.log('user is ', users)
        if (users) {
            
            console.log('User role:', users.role);

            if (users.role === "mainadmin") {
                response.redirect("/role/adminpanel" );
                console.log('dasdasd')
            }
            else if (users.role === 'admin') {
                response.redirect("/add/homeworkadmin" );

            }if (users.role === 'user'){
                response.redirect('/add/homework')
            }
        } else {
            response.render('classi.hbs', {
                message: 'Неверный логин или пароль'
             })
        }
        // console.log('login');

        

        
    }
    catch(err){
        console.log(err);
        response.sendStatus(500);
    }  
}
module.exports.homework =  async function (req, res) {
    // await mongoClient.connect();
    // const db = mongoClient.db("Users");
    const collection = await Homeworks.find({});
    // const result = Homeworks
        const uniqueNames = [];
        const uniqueObjects = [];
        const userId = []   

       console.log('sdasd')
        // Homeworks.forEach(obj => {
  
        //     userId.push(obj._id.toString());
        //     // console.log(obj._id.toString());
            
        // });
        // userId.push(Homeworks._id.toString());
        //  // Проверьте, есть ли данные в коллекции
        res.render("homeworknoadmin.hbs", { objects:  collection, name: collection});

}
module.exports.addhomework = async function (req, res) {
    try {
        // await mongoClient.connect();
        // const db = mongoClient.db("Users");
        // const collection = db.collection("homeworks");
        const result = await Homeworks.find({});
        const uniqueNames = [];
        const uniqueObjects = [];
        const userId = []   

       

            userId.push(obj._id);
            // console.log(obj._id.toString());
            

         // Проверьте, есть ли данные в коллекции
        res.render("homework.hbs", { objects:  result, name: result, id: userId });
        // console.log('asdasd')
        // console.log(userId)
        // console.log(result)
      
    } catch (err) {
        console.error('Ошибка при получении данных из MongoDB:', err);
    console.log(err); // Добавьте эту строку для вывода конкретной ошибки
    res.status(500).send('Ошибка сервера');
}}
module.exports.homeadmin = async function (req, res) {
    try {
        // await mongoClient.connect();
        // const db = mongoClient.db("Users");
        // const collection = db.collection("homeworks");
        const result = await Homeworks.find({});
        const uniqueNames = [];
        const uniqueObjects = [];
        const userId = []   

       

  
            userId.push(result._id);
            // console.log(obj._id.toString());
         // Проверьте, есть ли данные в коллекции
        res.render("homework.hbs", { objects:  result, name: result, id: userId });
        // console.log('asdasd')
        // console.log(userId)
        // console.log(result)
      
    } catch (err) {
        console.error('Ошибка при получении данных из MongoDB:', err);
    console.log(err); // Добавьте эту строку для вывода конкретной ошибки
    res.status(500).send('Ошибка сервера');
    } 
}
module.exports.delhomeadmin = async function (req, res) {
    let id = req.params.id
    const result = await Homeworks.findOneAndDelete({_id: id})
    // const user = await User.findById(id);
    // if(user) res.send(user);
    // else res.sendStatus(404);
    console.log(result)
    console.log(id)
    console.log('dftyu')
    if (result) {
        res.redirect('/add/homeworkadmin')
    }
}
module.exports.addhomework = async function (req, res) {

    const homework = new Homeworks({
        name: req.body.Login,
        age: req.body.pass,

       })
    if (req.body.Login) {
        homework.save().then(() => { console.log('Saved')})
        res.redirect('/add/homeworkadmin')


    }
  
}