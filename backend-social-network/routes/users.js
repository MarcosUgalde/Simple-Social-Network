const router = require("express").Router();
const { authorizer } = require("../middlewares");

const userControllers = require("../controllers/user");
const publicationControllers = require("../controllers/publications");

module.exports = (db) => {
  router.get("/", authorizer(), userControllers.getUser());
  //   router.get("/all", authorizer(), userControllers.getAllUsers(db));
  router.get(
    "/search-result/:username",
    authorizer(),
    userControllers.getByUsername(db)
  );
  router.get(
    "/:id",
    authorizer(),
    publicationControllers.getPublicationsByUser(db)
  );

  return router;
};
