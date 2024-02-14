const {
  insertPublication,
  selectPublicationsByUser,
  selectPublications,
  selectOnePublication,
  insertLike,
  insertOneLike,
  updatePublication,
  deletePublication,
  deleteUserXPublication,
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

const addLike =
  (db) =>
  async (post_id_liked, user_id, liked = true) => {
    try {
      const response = await db.query(
        insertLike(post_id_liked, user_id, liked)
      );

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

const addOneLike = (db) => async (id) => {
  try {
    const response = await db.query(insertOneLike(id));

    return {
      ok: true,
      data: response.rows,
    };
  } catch (error) {
    console.info("Add one like error: ", error.message);

    return {
      ok: false,
      message: error.message,
    };
  }
};

const increaseLike = (db) => async (post_id_liked, user_id) => {
  try {
    console.log("post_id_liked in models index: ", post_id_liked);
    console.log("user_id in models index: ", user_id);
    await db.query(insertLike(post_id_liked, user_id, (liked = true)));

    await db.query(insertOneLike(post_id_liked));

    return {
      ok: true,
      message: "Correctly submited like",
    };
  } catch (error) {
    console.info("Increase Like Error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const editPublication = (db) => async (title, post_text, id) => {
  try {
    await db.query(updatePublication(title, post_text, id));

    return {
      ok: true,
      message: "Publication updated",
    };
  } catch (error) {
    console.info("Update publication error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const eliminatePublication = (db) => async (id) => {
  try {
    await db.query(deleteUserXPublication(id));

    await db.query(deletePublication(id));

    return {
      ok: true,
      message: "Publication deleted",
    };
  } catch (error) {
    console.info("Publication delete error: ", error.message);
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
  addOneLike,
  increaseLike,
  editPublication,
  eliminatePublication,
};
