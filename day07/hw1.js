var express = require("express")
var bodyParser = require("body-parser")
var listRoute = require('./route/userRoute')
var app = express()

app.use(express.static('./public/'))
app.use(bodyParser.urlencoded({extended : true}))

app.use('/user',listRoute)

app.listen(5000)