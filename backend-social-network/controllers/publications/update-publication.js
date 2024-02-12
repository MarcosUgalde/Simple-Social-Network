const { editPublication } = require("../../models/publications");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const { title, post_text } = req.body;

  const response = await editPublication(await db)(title, post_text, id);

  if (!response) return next(errors[500]);

  res.status(200).json({
    success: true,
    message: response.message,
  });
};
