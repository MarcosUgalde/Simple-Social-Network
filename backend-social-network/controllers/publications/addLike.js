const { addLike } = require("../../models/publications");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = res.locals.user;
  const { post_id_liked } = req.params;
  const { liked } = req.body;

  const response = await addLike(await db)(post_id_liked, id, liked);

  if (!response.ok) return next(errors[response.error_code] || 500);

  res.status(200).json({
    success: true,
  });
};
