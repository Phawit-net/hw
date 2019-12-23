const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/passport/passport');
const bcrypt = require('bcryptjs')
module.exports = (app, db) => {
  app.post('/registerUser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        const data = {
          name: req.body.name,
          username: user.username,
          role: "user"
        };
        console.log(data);
        db.user.findOne({
          where: {
            username: req.body.username,
          },
        }).then(user => {
          console.log(user);
          user
            .update({
              name: data.name,
              email: data.email,
              role: data.role
            })
            .then(() => {
              console.log('user created in db');
              res.status(200).send({ message: 'user created' });
            });
        })
          .catch(err => {
            console.log(err)
          })
      }
    })(req, res, next);
  });
  app.post('/loginUser', (req, res, next) => {
    passport.authenticate('login', (err, users, info) => {
      if (err) {
        console.error(`error ${err}`);
      }
      if (info !== undefined) {
        console.error(info.message);
        if (info.message === 'bad username') {
          res.status(401).send(info.message);
        } else {
          res.status(403).send(info.message);
        }
      } else {
        db.user.findOne({
          where: {
            username: req.body.username,
          },
        }).then(user => {
          const token = jwt.sign({ id: user.id, role: user.role }, config.jwtOptions.secretOrKey, {
            expiresIn: 10800,
          });
          res.status(200).send({
            auth: true,
            token,
            message: 'user found & logged in',
          });
        });
      }
    })(req, res, next);
  });
  app.put('/change-password', passport.authenticate('jwt', { session: false }),
    async function (req, res) {
      let targetUser = await db.user.findOne({
        where : {id : req.user.id}
      })
      if(!targetUser){
        res.send(404).send('user not found')
      } else {
        bcrypt.compare(req.body.oldPassword , req.user.password, function(err,response){
          if (!response){
            res.status(401).send('your old password is wrong')
          } else {
            let salt = bcrypt.genSaltSync(config.BCRYPT_SALT_ROUNDS)
            let hashedPassword = bcrypt.hashSync(req.body.newPassword , salt)
            targetUser.update({
              password : hashedPassword
            })
            res.send('your password is change')
          }
        })
      }
    })


  async function getUserInfo(user_id) {
    const user = await db.user.findOne({
      attributes: ['id', 'name', 'profile_img_url'],
      where: { id: user_id },
      raw: true
    })
    return user
  }
  
  app.get('/user/:id', passport.authenticate('jwt', { session: false }),
    async function (req, res) {
      const friendId = req.params.id
      const userId = req.user.id
      let requestFromUser = await db.friend.findOne({
        where: { request_from_id: friendId, request_to_id: userId },
        attributes: ['status', ['request_from_id', 'id']],
        raw: true
      })

      let requestToUser = await db.friend.findOne({
        where: { request_to_id: friendId, request_from_id: userId },
        attributes: ['status', ['request_to_id', 'id']],
        raw: true
      })

      let user = await getUserInfo(friendId)

      if (requestFromUser && requestFromUser.id == friendId && requestFromUser.status == "request") {
        res.status(200).send({ ...user, statusName: 'รอคำตอบรับจากคุณ' })
      } else if (requestFromUser && requestFromUser.id == friendId && requestFromUser.status == "friend") {
        res.status(200).send({ ...user, statusName: 'เพือน' })
      } else if (requestToUser && requestToUser.id == friendId && requestToUser.status == "request") {
        res.status(200).send({ ...user, statusName: 'ส่งคำขอเป็นเพิ้อนแล้ว' })
      } else if (requestToUser && requestToUser.id == friendId && requestToUser.status == "friend") {
        res.status(200).send({ ...user, statusName: 'เพือน' })
      } else {
        res.status(404).send({ statusName: 'User Not Founded' })
      }
    });
}