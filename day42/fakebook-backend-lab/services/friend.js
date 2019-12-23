const passport = require("passport");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = (app, db) => {
  app.get(
    "/friend-request-to/:id",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      db.friend
        .create({
          status: "request",
          request_to_id: req.params.id,
          request_from_id: req.user.id
        })
        .then(result => {
          res.status(201).send({ message :`Sends request to friend id : ${req.params.id}`});
        })
        .catch(err => {
          res.status(400).send({ message: err.message });
        });
    }
  );

  app.get(
    "/request-list",  //คนที่ยิง request มาหาเรา
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      const requestList = await db.friend.findAll({
        where:{
          request_to_id : req.user.id ,
          status: "request"
        },
        attributes : [['request_from_id' , 'id']]
      })
      const requestListIds = requestList.map(request => request.id)
      const requestUser = await db.user.findAll({
        where:{
          id:{[Op.in] :requestListIds}
        },
        attributes : ['id','name' ,'profile_img_url']
      })
      res.send(requestUser)
    } 
  );

  app.get(
    "/accept-friend-request/:id",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      try {
        let result = await db.friend.update(
          {
            status: "friend"
          },
          {
            where: {
              request_to_id: parseInt(req.params.id),
              request_from_id: req.user.id
            }
          }
        );
        res.status(201).send(result);
      } catch {
        res.status(400).send({ message: err.message });
      }
    }
  );

  app.get(
    "/deny-friend-request/:id",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      db.friend
        .destroy({
          where: {
            status: "request",
            request_to_id: parseInt(req.params.id),
            request_from_id: req.user.id
          }
        })
        .then(result => {
          res.status(201).send({ message:"ลบ request"});
        })
        .catch(err => {
          res.status(400).send({ message: err.message });
        });
    }
  );

  app.get(
    "/delete-friend/:id",
    passport.authenticate("jwt", { session: false }),
     async function(req, res) {
      let targetFriend =  await db.friend.findOne({
        where : {
          [Op.or] : [
            {request_from_id : req.user.id , request_to_id: req.params.id , status: 'friend'},
            {request_from_id : req.params.id , request_to_id: req.user.id , status: 'friend'}
          ]
        }
      })
      if(!targetFriend){
        res.status(404).send({message:`friend id: ${req.params.id} not found`})
      } else {
        targetFriend.destroy()
        res.status(200).send({message:`friend id: ${req.params.id} has been deleted`})
      }
    }
  );

  app.get(
    "/friends-list",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      const requestFromIds = await db.friend.findAll({
        where:{
          request_to_id : req.user.id ,
          status: "friend"
        },
        attributes : [['request_from_id' , 'id']]
      })
      const requestToIds = await db.friend.findAll({
        where:{
          request_from_id : req.user.id ,
          status: "friend"
        },
        attributes : [['request_to_id' , 'id']]
      })
      const requestFromIdsArr = requestFromIds.map(request => request.id)
      const requestToIdsArr = requestToIds.map(request => request.id)
      const friendUser = await db.user.findAll({
        where:{
          id : {[Op.in]: requestFromIdsArr.concat(requestToIdsArr)} 
        },
        attributes : ['id','name' ,'profile_img_url']
      })
      res.status(200).send(friendUser)
    } 
  );
};
