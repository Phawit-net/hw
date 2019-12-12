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

//get all boat
app.get('/boats',(req,res)=>{           //เข้าไปที่get อันไหน เช่นให้ดึงข้อมูลที่เป็นboatทั้งหมด 
    let query = "SELECT * FROM boats"
    db.query(query,(err,results) =>{    //ส่ง query ไป ับ (error และ results)  
        res.json(results)               //.json คือทำให้อยู่ในรูป json
    })   
})                                      

//add boat
app.get('/addboat',(req,res)=>{         //เพิ่มค่าในdatabase
    let sql = `INSERT INTO boats(bid , bname , color) 
    VALUES (${req.query.bid},\"${req.query.bname}\",\"${req.query.color}\")`  //${req.query.bid ,... คือเราต้องรับparameterที่ postman ?bid=108&bname=hello&color=Green }
    db.query(sql,(err,results) =>{   
        if(err){
            console.log("something wrong")
        } else {
            res.send('success')
        }
    })   
})

//delete boat by id เช่น /deleteboatbyid?deleteboatid=108
app.get('/deleteboatbyid',(req,res)=>{    
    let query = `DELETE FROM boats WHERE bid = ${req.query.deleteboatid}`
    db.query(query,(err,results) =>{
        if(err){
            console.log(err)
        } else {
            res.send(`deleted boat id : ${req.query.deleteboatid} already`)
        }
    })
})

//update เช่น localhost:3001/updateboat?bid=104&bname=Hell&color=Green
app.get('/updateboat',(req,res)=>{    
    let query = `UPDATE boats SET bname = \"${req.query.bname}\",color = \"${req.query.color}\" WHERE bid = ${req.query.bid}`
    db.query(query,(err,results) =>{
        if(err){
            console.log(err)
        } else {
            res.send(`update boat id : ${req.query.bid} already`)
        }
    })
})

app.listen(3001,()=>{
    console.log("Start server at port 3001")
})