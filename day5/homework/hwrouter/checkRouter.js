var express = require('express')
var router = express.Router()

router.get('/:num' , function (req,res)
{
    var num = req.params.num
    if (num%2!=0){
        res.status(400).send('Bad Request')
    }
    else{
        res.status(200).send('the Success')
    }
    
})

module.exports = router