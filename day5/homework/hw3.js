
var express = require("express")
var app = express()

var echoRoute = require('./hwrouter/echoRouter')
app.use('/echo',echoRoute)

app.listen(3000)


