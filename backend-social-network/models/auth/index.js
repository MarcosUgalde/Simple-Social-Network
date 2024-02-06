const {
  insertUser,
  selectUser,
  selectAllUsers,
  selectUserByUsername,
} = require("./queries");

const createUser = (db) => async (email, username, password, public) => {
  try {
    await db.query(insertUser(email, username, password, public));

    return {
      ok: true,
    };
  } catch (error) {
    console.info("Create user error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const getUser = (db) => async (email, compareFn) => {
  try {
    const user = await db.maybeOne(selectUser(email));

    if (!user)
      return {
        ok: false,
        error_code: "wrong_data",
      };

    const areEqual = await compareFn(user.password);

    if (!areEqual)
      return {
        ok: false,
        error_code: "wrong_data",
      };
    return {
      ok: true,
      content: {
        id: user.id,
        email: user.email,
        username: user.username,
        public: user.public,
      },
    };
  } catch (error) {
    console.info("Select user error: ", error.message);
    return {
      ok: false,
      error: error.message,
    };
  }
};

const getUserByUsername = (db) => async (id) => {
  try {
    const response = await db.query(selectUserByUsername(id));

    return {
      ok: true,
      response: response.rows,
    };
  } catch (error) {
    console.info("User by username error: ", error.message);

    return {
      ok: false,
      message: error.message,
    };
  }
};

const getAllUsers = (db) => async (input) => {
  try {
    const response = await db.query(selectAllUsers(input));
    return {
      ok: true,
      response: response.rows,
    };
  } catch (error) {
    console.info("Select all users error: ", error.message);

    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  createUser,
  getUser,
  getUserByUsername,
  getAllUsers,
};
