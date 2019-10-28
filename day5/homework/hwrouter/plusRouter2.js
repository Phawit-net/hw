var express = require('express')
var router = express.Router()

router.get('/:a/:b' , function (req,res)
{
    var a = parseInt(req.params.a)
    var b = parseInt(req.params.b)
    res.send(String(a+b))
})

module.exports = router