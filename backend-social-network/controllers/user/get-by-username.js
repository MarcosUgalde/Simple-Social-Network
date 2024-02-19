const { getAllUsers } = require("../../models/auth");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { username } = req.params;
  const response = await getAllUsers(await db)(username);
  console.log(response);

  if (!response) return next(errors[error_code] || 500);

  res.status(200).json({
    success: true,
    content: response.response,
  });
};
