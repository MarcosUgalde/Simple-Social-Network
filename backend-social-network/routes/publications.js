const router = require("express").Router();
const { authorizer } = require("../middlewares");

const publicationControllers = require("../controllers/publications");

module.exports = (db) => {
  router.post("/new", authorizer(), publicationControllers.addPublication(db));
  router.post(
    "/like/add-one/:id",
    authorizer(),
    publicationControllers.addOneLike(db)
  );
  router.post(
    "/like/:post_id_liked",
    authorizer(),
    publicationControllers.insertLike(db)
  );
  router.get("/all", authorizer(), publicationControllers.getPublications(db));
  router.get(
    "/all/:username",
    authorizer(),
    publicationControllers.getPublicationsByUser(db)
  );
  router.get(
    "/:id",
    authorizer(),
    publicationControllers.getOnePublication(db)
  );

  router.put(
    "/:id",
    authorizer(),
    publicationControllers.updatePublication(db)
  );

  router.delete(
    "/:id",
    authorizer(),
    publicationControllers.deletePublication(db)
  );
  return router;
};
