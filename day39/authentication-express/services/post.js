const passport = require('passport')

module.exports = (app,db)=>{
    app.post('/create-post',passport.authenticate('jwt',{session :false}),   //ป้องกันไว้ถ้าไม่มี token จะไม่สามารถเข้าได้
    function(req,res){
        db.post.create({
            user_id : req.user.id,    // req.user.id **** user ไม่ได้ถูกส่งเข้ามา
            message : req.body.message,
            image_url : req.body.image_url
        })
        .then((result)=>{
            res.status(201).send(result)
        })
        .catch((err)=>{
            console.error(err);
            res.status(400).send({message : err.message})
        })
    })

}