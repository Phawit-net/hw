const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')  //แก้ไขปัญหา front end กับ back end คนละ server
const db = require("./models")
const app = express()

app.use(cors())

db.sequelize.sync({force : true }).then(()=>{
    app.listen(8081,()=>{
        console.log("start server")
    })
})
