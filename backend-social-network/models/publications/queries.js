const { sql } = require("slonik");

const insertPublication = (title, post_text, posted_by) => sql.unsafe`
INSERT INTO publications (
    title, post_text, posted_by
    ) VALUES (
        ${title}, ${post_text}, ${posted_by}
    )
`;

const selectPublicationsByUser = (username) => sql.unsafe`
        SELECT * FROM publications
        JOIN users
        ON users.id = publications.posted_by
        WHERE username = ${username}
`;

const selectPublications = () => sql.unsafe`
        SELECT * FROM publications
`;

module.exports = {
  insertPublication,
  selectPublicationsByUser,
  selectPublications,
};
