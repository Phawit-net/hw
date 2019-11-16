const express = require("express")
const db = require("./models")
const app = express()
const boatService = require("./services/boat")
const sailorService = require("./services/sailor")
const reserveService = require("./services/reserve")
const bodyParser = require('body-Parser')

app.use(bodyParser.urlencoded({ extended: false }))  //เหมือนกับ app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())                           //เหมือนกับ app.use(express.json())

// สร้างmodelขึ้นมาและให้ sequelize 
//.syncมี object force:true คือสร้างตารางใหม่ทุกครั้งโดยไม่เช็คว่ามีซ้ำ :false คือถ้าตารางชื่อซ้ำจะไม่สร้าง
db.sequelize.sync({force:false}).then(()=>{
    boatService(app,db)     //ไฟล์ service สามารถใช้ app กับ dbได้
    sailorService(app,db)
    reserveService(app,db)

    app.listen(8080,() => 
        console.log("server is running"))
    
})