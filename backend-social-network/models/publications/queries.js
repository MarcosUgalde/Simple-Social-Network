const { sql } = require("slonik");

const insertPublication = (title, post_text, posted_by) => sql.unsafe`
INSERT INTO publications (
    title, post_text, posted_by
    ) VALUES (
        ${title}, ${post_text}, ${posted_by}
    )
`;

module.exports = {
  insertPublication,
};
