const express = require("express")
const app = express()
const path = require('path');
let todoList = [] 

app.get('/getTodoList',(req,res,next)=>
{
    res.sendfile(path.join('./list.html'));
})

app.listen(3000, ()=>{
    console.log('server is running.')
})