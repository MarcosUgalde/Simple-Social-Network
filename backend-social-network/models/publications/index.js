const { insertPublication } = require("./queries");

const addPublication = (db) => async (title, post_text, posted_by) => {
  try {
    await db.query(insertPublication(title, post_text, posted_by));

    return {
      ok: true,
    };
  } catch (error) {
    console.info("Insert publication error: ", error.message);
    return {
      ok: false,
      error: error.message,
    };
  }
};

module.exports = {
  addPublication,
};
