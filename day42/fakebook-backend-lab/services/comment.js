const passport = require("passport");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = (app, db) => {
  app.post(
    "/create-comment/:post_id",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      db.comment
        .create({
          message: req.body.message,
          post_id: req.params.post_id,
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
    "/update-comment/:id",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      let targetComment = await db.comment.findOne({
        where :{id : req.params.comment.id }
      })
      if(!targetComment){
        res.status(404).send({ message:'Comment not founded' });
      } else if(targetComment.user_id !== req.user.id) {
        res.status(401).send({ message:'Unauthorized' });
      } else {
        targetComment.update({
          message : req.body.message
        })
        res.send({ message: `Comment id ${req.params.comment.id} has been edited`});
      }
      // try {
      //   let result = await db.comment.update(
      //     {
      //       message: req.body.message
      //     },
      //     {
      //       where: {
      //         id: req.params.id,
      //       }
      //     }
      //   );
      //   res.status(201).send(result);
      // } catch {
      //   res.status(400).send({ message: err.message });
      // }
    }
  );

  app.delete(
    "/delete-comment/:id",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      let targetComment = await db.comment.findOne({
        where :{id : req.params.comment.id }
      })
      if(!targetComment){
        res.status(404).send({ message:'Comment not founded' });
      } else if(targetComment.user_id !== req.user.id) {
        res.status(401).send({ message:'Unauthorized' });
      } else {
        targetComment.destroy()
        res.send({ message: `Comment id ${req.params.comment.id} has been deleted`});
      }
      // try {
      //   await db.comment.destroy({
      //     where: {
      //       id: req.params.id,
      //     }
      //   });
      //   res.status(200).send({ message: "ลบcommentแล้วนะ" });
      // } catch {
      //   res.status(400).send({ message: err.message });
      // }
    }
  );
};
