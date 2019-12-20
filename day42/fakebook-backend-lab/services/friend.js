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
          request_to_id: parseInt(req.params.id),
          request_from_id: req.user.id
        })
        .then(result => {
          res.status(201).send(result);
        })
        .catch(err => {
          res.status(400).send({ message: err.message });
        });
    }
  );

  app.get(
    "/request-list",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      // Lab 2
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
    function(req, res) {
      // Lab 5
    }
  );

  app.get(
    "/friends-list",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      // Lab 6
    }
  );
};
