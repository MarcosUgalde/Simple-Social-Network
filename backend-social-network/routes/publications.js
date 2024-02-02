const router = require("express").Router();
const { authorizer } = require("../middlewares");

const publicationControllers = require("../controllers/publications");

module.exports = (db) => {
  router.post("/new", authorizer(), publicationControllers.addPublication(db));
  router.get("/all", authorizer(), publicationControllers.getPublications(db));
  router.get(
    "/:username/all",
    authorizer(),
    publicationControllers.getPublicationsByUser(db)
  );

  return router;
};
