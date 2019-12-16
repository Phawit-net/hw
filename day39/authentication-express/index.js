const express = require('express')
const bodyParser = require('body-parser')
const db = require('./models')
const app = express()

const userService = require('./services/user')
// import passport & passport-jwt module  use for authentication 
const passport = require('passport')

// use the strategy 
app.use(passport.initialize())

// use body-parser  parse application/json //ถ้าไม่ใส่ post method จะอ่านไม่ได้ 
app.use(bodyParser.json())

// use body-parser  parse application/x-www-form-urlencoded //ถ้าไม่ใส่ post method จะอ่านไม่ได้ 
app.use(bodyParser.urlencoded({extended : true}))

//import config of passport
require('./config/passport/passport')

db.sequelize.sync({force : false}).then(()=>{
    userService(app,db)

    app.listen(8080, () =>{
        console.log('Server is running on port 8080')
    })
})