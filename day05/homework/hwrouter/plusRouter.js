var express = require('express')
var router = express.Router()

router.get('/' , function (req,res)
{
    var a = parseInt(req.query.a)
    var b = parseInt(req.query.b)
    res.send(String(a+b))
})

module.exports = router