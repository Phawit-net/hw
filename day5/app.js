var express = require("express")
var app = express()

app.use(express.static('./public/'))

var dogRoute = require('./router/dogRoute')
app.use('/dog',dogRoute)

var catRoute = require('./router/catRoute')
app.use('/cat',catRoute)

app.listen(3000)