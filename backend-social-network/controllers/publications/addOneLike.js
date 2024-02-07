const { addOneLike } = require("../../models/publications");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;

  const response = await addOneLike(await db)(id);

  if (!response.ok) return next(errors[response.error_code || 500]);

  res.status(200).json({
    success: true,
  });
};
