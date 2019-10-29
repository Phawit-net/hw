var express = require('express')
var router = express.Router()

router.get('/:num' , function (req,res)
{
    var num = req.params.num
    if (num%2!=0){
        res.sendStatus(400)
    }
    else{
        res.sendStatus(200)
    }
    
})

module.exports = router