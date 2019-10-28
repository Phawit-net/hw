
var express = require("express")
var app = express()

app.use(express.static('./public/'))

var userRoute = require('./router/userRoute')
app.use('/user',userRoute)

var middleFunc = function(req,res,next)
{
    res.send("404 Not Found");
}
app.use(middleFunc)

app.listen(3000)


//Query & Parameter