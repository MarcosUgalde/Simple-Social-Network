module.exports = (db) => async (req, res, next) => {
  const { username, email, public } = res.locals.user;

  res.status(200).json({
    success: true,
    data: {
      username,
      email,
      public,
    },
  });
};
