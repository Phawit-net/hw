var express = require('express')
var app = express()

app.get('/:a',function(req,res){
    if(parseInt(req.params.a) %2==0)
    {
        res.send("Even number")
    }
    else
    {
        res.send("Odd number")
    }
})

app.get('/16/:a' , function(req,res){
    var hex;
    hex = (parseInt(String(req.params.a),16))
    if(hex%2==0)
    {
        res.send("Even number")
    }
    else
    {
        res.send("Odd number")
    }
})

app.get('/9/:a' , function(req,res){
    var hex;
    hex = (parseInt(String(req.params.a),9))
    if(hex%2==0)
    {
        res.send("Even number")
    }
    else
    {
        res.send("Odd number")
    }
})

app.listen(5000)