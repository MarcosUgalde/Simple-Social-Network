const router = require("express").Router();
const { authorizer } = require("../middlewares");

const publicationControllers = require("../controllers/publications");

module.exports = (db) => {
  router.post("/new", authorizer(), publicationControllers.addPublication(db));

  return router;
};
