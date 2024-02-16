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

const selectUserByUsername = (id) => sql.unsafe`
        SELECT * FROM users
        WHERE id = ${id}
`;

const selectAllUsers = (input) => sql.unsafe`
        SELECT * FROM users
        WHERE username LIKE '%' || ${input} || '%'
`;

module.exports = {
  insertUser,
  selectUser,
  selectUserByUsername,
  selectAllUsers,
};
