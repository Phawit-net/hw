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
      try {
        let result = await db.post.update(
          {
            message: req.body.message
          },
          {
            where: {
              id: req.params.id,
              user_id: req.user.id
            }
          }
        );
        res.status(201).send(result);
      } catch {
        res.status(400).send({ message: err.message });
      }
    }
  );

  app.delete(
    "/delete-post/:id",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      try {
        await db.post.destroy({
          where: {
            id: req.params.id,
            user_id: req.user.id
          }
        });
        res.status(200).send({ message: "ลบแล้วนะ" });
      } catch {
        res.status(400).send({ message: err.message });
      }
    }
  );

  app.get(
    "/my-posts",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      db.post
        .findAll({
          include: [{ model: db.comment }],
          where: { user_id: req.user.id }
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
    "/feed",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      // Lab 5
    }
  );
};
