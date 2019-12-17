const passport = require('passport')
const jwt = require('jsonwebtoken')
const jwtOptions = require('../config/passport/passport')

module.exports = (app,db)=>{
    app.post('/registerUser',(req,res,next)=>{
        passport.authenticate('register' , (err,user,info) => {  // นำ passport.js ที่เป็น register มาใช้
            if(err){
                console.error(err);
            }
            if(info !== undefined){  
                console.error(info.message)
                res.status(403).send(info.message)
            } else {
                const data = {
                    name : req.body.name,
                    username : user.username,
                    role : 'user' 
                };
                db.user.findOne({
                    where :{username : data.username}
                })
                .then(user =>{  // user เป็นตัวแปลที่ถูกส่งมาจาก passport มันจะลิ้งค์กับ dbไ ได้เลย จึงใช้ .updateได้
                    user.update({
                        name : data.name,
                        role : data.role
                    })
                    .then(()=>{
                        console.log('user created in db')
                        res.status(200).send({message: 'user created in db'})
                    })
                    .catch(err => {
                        console.error(err)
                        res.status(400).send({message : err.message})
                    })
                })
                .catch(err =>{
                    console.error(err)
                    res.status(400).send({message : err.message})
                })
            }
        })(req,res,next)  //เพิ่มลงใน function passport
    })
// คลีน code     
// else {
//     user.update({
//         name : req.body.name,
//         role : 'user'
//     })
//     .then(()=>{
//         console.log('user created in db')
//         res.status(200).send({message: 'user created in db'})                   
//     })
//     .catch(err =>{
//         console.error(err)
//         res.status(400).send({message : err.message})
//     })
// }

    app.post('/loginUser',(req,res,next)=>{
        passport.authenticate('login',(err,user,info)=>{
            if(err){
                console.error(err)
            }
            if(info !== undefined){
                console.error(info.message)
                res.status(400).send(info.message)
            }else{
                const token = jwt.sign({ id: user.id , role : user.role , name : user.name},
                jwtOptions.secretOrKey, { expiresIn : 3600 })
            res.status(200).send({
                auth : true,
                token,
                message : 'user found & logged in'
                })   
            } 
        })(req,res,next)   //ใส่เพื่อเรียกใช้ authenticate ต่อ
    })

    app.get('/protected-route',passport.authenticate('jwt',{session :false}),   //ป้องกันไว้ถ้าไม่มี token จะไม่สามารถเข้าได้
        function(req,res){
            res.status(200).send(req.user)
        }
    )
}

