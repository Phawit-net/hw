var express = require("express")
var router = express.Router()
var controller = require('../controller/listController') //ADD path controller

//var list =[1]
router.get('/',controller.getList);  // CHANGE call function controller 

// router.get('/',function(req,res){
//     res.send("hello")
// })

router.post('/',function(req,res){
    list.push(req.body.data)
    res.send(list)
})

module.exports = router