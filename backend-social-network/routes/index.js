const router = require("express").Router();

const authRoutes = require("./auth");
const userRoutes = require("./users");
const publicationsRoutes = require("./publications");

module.exports = (db) => {
  router.use("/auth", authRoutes(db));
  router.use("/user", userRoutes(db));
  router.use("/publications", publicationsRoutes(db));

  return router;
};
