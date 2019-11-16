var express = require("express")
var model = require('../model/listModel')

module.exports.getList=function(req,res){
    res.send(model)
};

