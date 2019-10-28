
var express = require("express")
var app = express()

var plusRouter = require('./hwrouter/plusRouter')
app.use('/plus',plusRouter)

app.listen(3000)

