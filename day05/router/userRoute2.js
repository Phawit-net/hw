var express = require('express')
var router = express.Router()

router.post('/add' , function (req,res)
{
    var a = parseInt(req.body.a)
    var b = parseInt(req.body.b)
    res.send(String(a+b)) 
})

module.exports = router