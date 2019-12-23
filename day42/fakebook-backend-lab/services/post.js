const passport = require("passport");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = (app, db) => {
  app.post(
    "/create-post",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      db.post
        .create({
          message: req.body.message,
          image_url: req.body.image_url,
          user_id: req.user.id
        })
        .then(result => {
          res.status(201).send(result);
        })
        .catch(err => {
          res.status(400).send({ message: err.message });
        });
    }
  );

  app.put(
    "/update-post/:id",
    passport.authenticate("jwt", { session: false }),
    async function async(req, res) {
      // try {
      //   let result = await db.post.update(
      //     {
      //       message: req.body.message
      //     },
      //     {
      //       where: {
      //         id: req.params.id,
      //         user_id: req.user.id
      //       }
      //     }
      //   );
      //   res.status(201).send(result);
      // } catch {
      //   res.status(400).send({ message: err.message });
      // }
      let targetPost = await db.post.findOne({
        where: {
          id: req.params.id,
          user_id: req.user.id
        }
      });
      if (!targetPost) {
        res.status(404).send({ message: "post not found or Unauthorize" });
      } else {
        targetPost.update({
          message: req.body.message,
          image_url: req.body.image_url
        });
        res.status(200).send({ message: `Post id:${req.params.id} has been updated` });
      }
    }
  );

  app.delete(
    "/delete-post/:id",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      // try {
      //   await db.post.destroy({
      //     where: {
      //       id: req.params.id,
      //       user_id: req.user.id   //ใส่เพื่อให้ลบของคนที่ login ไม่งั้นมันจะลบของใครก็ได้
      //     }
      //   });
      //   res.status(200).send({ message: `Post id:${req.params.id} has been deleted`});
      // } catch {
      //   res.status(400).send({ message: err.message });
      // }
      let targetPost = await db.post.findOne({
        where: {
          id: req.params.id,
          user_id: req.user.id
        }
      });
      if (!targetPost) {
        res.status(404).send({message: `post id:${req.params.id}not found or Unauthorize`});
      } else {
        targetPost.destroy();
        res.status(200).send({ message: `Post id:${req.params.id} has been updated` });
      }
    }
  );

  app.get(
    "/my-posts",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      // db.post
      //   .findAll({
      //     where: { 
      //       user_id: req.user.id 
      //     },
      //     include: [{ model: db.comment }]
      //   })
      //   .then(result => {
      //     res.status(201).send(result);
      //   })
      //   .catch(err => {
      //     console.error(err);
      //     res.status(400).send({ message: err.message });
      //   });
      db.post.findAll({
        where: { 
            user_id: req.user.id 
          },
          include: [
            { model : db.user,
              attributes : ['id','name','profile_img_url']
            },
            { model: db.comment, 
              include :[{ model : db.user, attributes : ['id','name','profile_img_url']}]
            }]
        })
        .then(result => {
          res.status(201).send(result);
        })
        .catch(err => {
          console.error(err);
          res.status(400).send({ message: err.message });
        });
      }
  );

  app.get(
    "/feed",  // เห็นโพสของเราและคนที่เป็นเพื่อน
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
      const allIds = requestFromIdsArr.concat(requestToIdsArr).concat([req.user.id])
      const allFeedPost = await db.post.findAll({
        wherer:{
          user_id:{[Op.in]:allIds}
        },
        include: [
          { model : db.user,
            attributes : ['id','name','profile_img_url']
          },
          { model: db.comment, 
            include :[{ model : db.user, attributes : ['id','name','profile_img_url']}]
          }]
      })
      res.status(200).send(allFeedPost)
    }
  );
};
