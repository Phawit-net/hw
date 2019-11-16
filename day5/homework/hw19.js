var express = require("express")
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/countFields' ,function(req,res,next){
    //obj = req.body
    // es.sendStatus(200)
    res.send(`${Object.keys(req.body).length}`)

})

app.listen(3000)