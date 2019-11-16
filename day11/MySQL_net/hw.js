const express = require("express")
const app = express()
const mysql = require("mysql") //call mysql 

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Assasin14526',
    database:'boatrental',
})

db.connect()

app.get('/sailors',(req,res)=>{           
    let query = "SELECT * FROM sailors"
    db.query(query,(err,results) =>{     
        res.json(results)               
    })   
})                                      

app.get('/addsailor',(req,res)=>{         
    let query = `INSERT INTO sailors(sid , sname , rating , age) 
    VALUES (${req.query.sid},\"${req.query.sname}\",${req.query.rating},${req.query.age})` 
    db.query(query,(err,results) =>{   
        if(err){
            console.log("something wrong")
        } else {
            res.send('success')
        }
    })   
})

app.get('/deletesailorbyid',(req,res)=>{    
    let query = `DELETE FROM sailors WHERE sid = ${req.query.deletesailorid}`
    db.query(query,(err,results) =>{
        if(err){
            console.log(err)
        } else {
            res.send(`deleted sailor id : ${req.query.deletesailorid} already`)
        }
    })
})

app.get('/updatesailor',(req,res)=>{    
    let query = `UPDATE sailors SET sname = \"${req.query.updatesname}\",rating = ${req.query.updaterating},age = ${req.query.updateage} WHERE sid = ${req.query.sid}`
    db.query(query,(err,results) =>{
        if(err){
            console.log(err)
        } else {
            res.send(`update sailor id : ${req.query.sid} already`)
        }
    })
})

app.get('/reserves',(req,res)=>{           
    let query = "SELECT * FROM reserves"
    db.query(query,(err,results) =>{     
        res.json(results)               
    })   
})                                      

app.get('/addreserve',(req,res)=>{         
    let query = `INSERT INTO reserves(sid , bid , day) 
    VALUES (${req.query.sid},${req.query.bid},\"${req.query.day}\")` 
    db.query(query,(err,results) =>{   
        if(err){
            console.log("something wrong")
        } else {
            res.send('success')
        }
    })   
})

app.get('/deletereservebyid',(req,res)=>{    
    let query = `DELETE FROM reserves WHERE sid = ${req.query.deletereserveid}`
    db.query(query,(err,results) =>{
        if(err){
            console.log(err)
        } else {
            res.send(`deleted reserve : ${req.query.deletereserveid} already`)
        }
    })
})

app.get('/updatereserve',(req,res)=>{    
    let query = `UPDATE reserves SET day = \"${req.query.updateday}\" WHERE sid = ${req.query.sid}`
    db.query(query,(err,results) =>{
        if(err){
            console.log(err)
        } else {
            res.send(`update reserves : ${req.query.sid} already`)
        }
    })
})

app.listen(3001,()=>{
    console.log("Start server at port 3001")
})