var express = require("express")
var router = express.Router()
var controller = require('../controller/userController') //ADD path controller

router.get('/',controller.getList);  // CHANGE call function controller 

router.post('/',controller.postList);

module.exports = router