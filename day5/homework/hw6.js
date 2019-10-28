
var express = require("express")
var app = express()

var plusRouter2 = require('./hwrouter/plusRouter2')
app.use('/plus',plusRouter2)

app.listen(3000)

