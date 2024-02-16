const router = require("express").Router();
const { authorizer } = require("../middlewares");

const userControllers = require("../controllers/user");

module.exports = (db) => {
  router.get("/", authorizer(), userControllers.getUser());
  //   router.get("/all", authorizer(), userControllers.getAllUsers(db));
  router.get("/search-result", authorizer(), userControllers.getByUsername(db));

  return router;
};
