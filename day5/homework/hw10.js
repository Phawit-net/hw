
var express = require("express")
var app = express()

let result = []
app.post('/number/:a', function(req, res, next) {
       result.push(parseInt(req.params.a))
       res.send(String([`${result}`]))
   })

 app.delete('/number/:a', function(req, res, next) {
    for(let i =0;i<result.length;i++)
    {
        if (parseInt(req.params.a)==result[i])
        {
            result.splice(i,1);
        }
    }
    res.send(String([`${result}`])) 
 }) 

 app.put('/number/:a/:b', function(req, res, next) {
    for(let i =0;i<result.length;i++)
    {
        if (parseInt(req.params.a)==result[i])
        {
            result[i] = parseInt(req.params.b);
        }
    }
    res.send(String([`${result}`])) 
 }) 

app.listen (3000)   