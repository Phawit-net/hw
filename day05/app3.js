
var express = require("express")
var bodyParser = require("body-parser")
var app = express()

app.use(express.static('./public/'))

app.use(bodyParser.urlencoded({  ///setค่า request.body 
    extended : true
}))

var userRoute2 = require('./router/userRoute2')
app.use('/user',userRoute2)

app.listen(3000)


//Body Parser Lab4