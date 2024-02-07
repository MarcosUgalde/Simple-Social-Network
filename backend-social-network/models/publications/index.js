const {
  insertPublication,
  selectPublicationsByUser,
  selectPublications,
  selectOnePublication,
  insertLike,
} = require("./queries");

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

const getPublicationsByUser = (db) => async (username) => {
  try {
    const response = await db.query(selectPublicationsByUser(username));

    return {
      ok: true,
      data: response.rows,
    };
  } catch (error) {
    console.info("Select publications by user error: ", error.message);

    return {
      ok: false,
      message: error.message,
    };
  }
};

const getPublications = (db) => async () => {
  try {
    const response = await db.query(selectPublications());

    return {
      ok: true,
      data: response.rows,
    };
  } catch (error) {
    console.info("Get publications error: ", error.message);

    return {
      ok: false,
      message: error.message,
    };
  }
};

const getOnePublication = (db) => async (id) => {
  try {
    const response = await db.query(selectOnePublication(id));

    return {
      ok: true,
      data: response.rows,
    };
  } catch (error) {
    console.info("Get one publication error: ", error.message);

    return {
      ok: true,
      message: error.message,
    };
  }
};

const addLike = (db) => async (post_id_liked, user_id, liked) => {
  try {
    const response = await db.query(insertLike(post_id_liked, user_id, liked));

    return {
      ok: true,
      data: response.rows,
    };
  } catch (error) {
    console.info("Insert like error: ", error.message);

    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  addPublication,
  getPublicationsByUser,
  getPublications,
  getOnePublication,
  addLike,
};
