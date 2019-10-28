var express = require('express')
var router = express.Router()

router.get('/plus/:a/:b' , function (req,res)
{
    var a = parseInt(req.query.a)
    var b = parseInt(req.query.b)
    res.send(`${a+b}`)   
})

module.exports = router