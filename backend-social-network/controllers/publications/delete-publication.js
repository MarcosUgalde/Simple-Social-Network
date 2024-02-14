const { eliminatePublication } = require("../../models/publications");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;

  const elimination = await eliminatePublication(await db)(id);
  if (!elimination.ok) return next(errors[elimination.error_code || 500]);

  res.status(200).json({
    success: true,
    message: "Publication deleted",
  });
};
