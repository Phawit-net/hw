var express=require("express")
var cors=require("cors")
var app=express()
var bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json());
var todo=["test","array"]
app.get("/todolist",function(req,res,next){
res.send(todo)
})
app.post("/todolist",function(req,res,next){
    todo.push(req.body.text)
    res.send(req.body.text)
    //console.log(req.body.text)
})

app.listen(3000)