
var express = require("express")
var app = express()

var checkRouter = require('./hwrouter/checkRouter')
app.use('/checkEvenNumber',checkRouter)

app.listen(3000)

