var express = require('express')
var router = express.Router()

router.get('/walk',function(req,res)
{
    res.send('dog walk')
})

router.get('/play',function(req,res)
{
    res.send('dog play')
})

module.exports = router