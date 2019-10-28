var express = require("express")
var app = express()

app.get('/staticJSON',function(req,res)
{   
    var info = {text:"Hello World"}
    res.send(info)
})
app.listen(3000)