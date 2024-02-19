const { sql } = require("slonik");

const insertPublication = (title, post_text, posted_by) => sql.unsafe`
INSERT INTO publications (
    title, post_text, posted_by
    ) VALUES (
        ${title}, ${post_text}, ${posted_by}
    )
`;

const selectPublicationsByUser = (username) => sql.unsafe`
        SELECT publications.id, publications.title, publications.post_text, publications.likes, publications.posted_by, users.username FROM publications
        JOIN users
        ON users.id = publications.posted_by
        WHERE users.username = ${username}
`;

const selectPublications = () => sql.unsafe`
        SELECT * FROM publications
`;

const selectOnePublication = (id) => sql.unsafe`
        SELECT publications.title, publications.post_text, publications.likes, publications.posted_by, users.username FROM publications
        JOIN users
        ON publications.posted_by = users.id
        WHERE publications.id = ${id}
`;

const insertLike = (post_id_liked, user_id, liked) => sql.unsafe`
        INSERT INTO users_x_publications (
                post_id_liked, user_id, liked
        ) VALUES (
                ${post_id_liked}, ${user_id}, ${liked}
        )
`;

const insertOneLike = (id) => sql.unsafe`
        UPDATE publications
        SET likes = likes + 1
        WHERE id = ${id}
`;

const updatePublication = (title, post_text, id) => sql.unsafe`
                UPDATE publications
                SET title = ${title},
                post_text = ${post_text}
                WHERE id = ${id}
`;

const deletePublication = (id) => sql.unsafe`
                DELETE FROM publications
                WHERE id = ${id}
`;

const deleteUserXPublication = (id) => sql.unsafe`
                DELETE FROM users_x_publications
                WHERE post_id_liked = ${id}
`;

module.exports = {
  insertPublication,
  selectPublicationsByUser,
  selectPublications,
  selectOnePublication,
  insertLike,
  insertOneLike,
  updatePublication,
  deletePublication,
  deleteUserXPublication,
};
