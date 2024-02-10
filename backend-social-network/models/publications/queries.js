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

const selectOnePublication = (id) => sql.unsafe`
        SELECT * FROM publications
        WHERE id = ${id}
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

// const like = (post_id_liked, user_id) => sql.unsafe`
//         INSERT INTO users_x_publications (
//                 post_id_liked, user_id
//         ) VALUES (
//                 ${post_id_liked}, ${user_id}
//         );

//         UPDATE publications
//         SET likes = likes + 1
//         WHERE id = ${post_id_liked};

//         COMMIT;
// `;

module.exports = {
  insertPublication,
  selectPublicationsByUser,
  selectPublications,
  selectOnePublication,
  insertLike,
  insertOneLike,
  //   like,
};
