const { getUserByUsername } = require("../../models/auth");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const response = await getUserByUsername(await db)(id);

  if (!response) return next(errors[error_code] || 500);

  res.status(200).json({
    success: true,
    content: response.response,
  });
};
