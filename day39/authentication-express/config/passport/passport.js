const env = process.env.NODE_ENV || 'development' //process.env.NODE_ENV ตัวกำหนด environment ถ้าไม่มีใช้ตัวหลัง 
const config = require('../config.json')[env];    //จะไปดึง env(development) ในไฟล์ config.json 

// กำหนด salt ให้ไปใส่ใน config.json salt_length
const bcrypt = require('bcryptjs')
const BCRYPT_SALT_ROUNDS = config.salt_length

const passport = require('passport')
const loaclStrategy = require('passport-local').Strategy
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const db = require('../../models')

let jwtOption = {}
jwtOption.secretOrKey = 'c0d3c4mp4'  //เป็นการกำหนด superSecret key ปกติจะไม่เก็บใน code

// เป็นการกำหนด strategy ทำการ customize passport ว่าสามารถทำะไรได้บ้าง
passport.use('register',new loaclStrategy(
    {
        usernameField:'username',  //ใส่ username or email 
        passwordField:'password',
        session:false,  //ปกติเวลาใช้จะมีการเก็บ session แต่ในที่นี้ไม่ได้ใช้เลยเปลี่ยนเป็น false 
    },
    (username,password,done) => {  //เขียนต่อว่า username ที่เราได้มาจะเอามาทำอะไรกับ database 
        db.user.findOne({   //check ก่อน ว่ามีusername ในdatabase ไหมถ้ามีจะไม่ให้เก็บusername 
            where:{username :username }
        }).then(user => {
            if (user !== null ){
                console.log('Username already taken')
                return done(null , false , {message: 'Username already taken'});      // function done คือ 3 argument(error, user, info(สิง่ที่ต้องการบอกหลังจากทำงานบางอย่าง))
            } else {
                let salt = bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS);   //ถ้าไม่มีให้ gen salt ขึ้นมา
                let hashedPassword = bcrypt.hashSync(password , salt)  // ทำการ hash password
                db.user.create({ username , password : hashedPassword})  //นำไปเก็บไว้ที่databse 
                .then(user=>{
                    console.log('user create')  
                    return done(null,user)    //ส่ง user กลับ
                })
                .catch(err =>{
                    console.error(err)
                    done(err)
                })
            }
        })
    }
))