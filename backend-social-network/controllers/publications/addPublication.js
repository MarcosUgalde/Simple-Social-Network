const { addPublication } = require("../../models/publications");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { title, post_text } = req.body;
  const { id } = res.locals.user;
  const response = await addPublication(await db)(title, post_text, id);

  if (!response.ok) return next(errors[response.error_code || 500]);

  res.status(200).json({
    success: true,
  });
};
