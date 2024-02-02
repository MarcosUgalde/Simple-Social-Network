const { getPublicationsByUser } = require("../../models/publications");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { username } = req.params;
  const response = await getPublicationsByUser(await db)(username);

  if (!response) return next(errors[response.error_code || 500]);

  res.status(200).json({
    success: true,
    content: response.data,
  });
};
