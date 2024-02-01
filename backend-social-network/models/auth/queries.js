const { sql } = require("slonik");

const insertUser = (email, username, password, public) => sql.unsafe`
    INSERT INTO users (
        email, username, password, public
    ) VALUES (
        ${email}, ${username}, ${password}, ${public}
    )
`;

const selectUser = (email) => sql.unsafe`
        SELECT * FROM users
        WHERE email = ${email}
`;

const selectUserByUsername = (username) => sql`
        SELECT * FROM users
        WHERE username = ${username}
`;

const selectAllUsers = (input) => sql.unsafe`
        SELECT * FROM users
        WHERE username LIKE %${input}%
`;

module.exports = {
  insertUser,
  selectUser,
  selectUserByUsername,
  selectAllUsers,
};
