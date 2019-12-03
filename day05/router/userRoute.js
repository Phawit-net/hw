var express = require('express')
var router = express.Router()

//router.get('/',function(req,res)
//{
    //res.send(req.query.id)
//    res.send("404 User Not Found")
//})

//router.get('/:id' , function (req,res)
//{
//    res.send(req.params.id)    
//})

router.get('/add/:a/:b' , function (req,res)
{
    var a = parseInt(req.params.a)
    var b = parseInt(req.params.b)
    //res.send(String(a+b)) 
    res.send(`${a+b}`)
    //var a = req.params.a
    //var b = req.params.b
    //res.send(a+b)    
})

module.exports = router