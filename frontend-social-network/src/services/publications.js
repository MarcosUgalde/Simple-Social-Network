export const selectPublications = (client) => async () => {
  try {
    const { data: response } = await client.get("/publications/all");
    console.info("Publications info: ", response);
    return response;
  } catch (error) {
    console.info("Get publications error: ", error.message);
    return null;
  }
};

export const selectOnePublication = (client) => async (id) => {
  try {
    const { data: response } = await client.get(`/publications/${id}`);
    console.info("Publication data: ", response);
    return response;
  } catch (error) {
    console.info("Publication info error: ", error.message);
    return null;
  }
};

export const selectAuthorInformation = (client) => async (id) => {
  try {
    const { data: response } = await client.get(`user/${id}`);
    console.info("Author data: ", response);
    return response;
  } catch (error) {
    console.info("Fetch author info error: ", error.message);
    return null;
  }
};

export const insertLike = (client) => async (id) => {
  try {
    const { data: response } = await client.post(`/publications/like/${id}`);
    console.info("Insert like data: ", response);
    return response;
  } catch (error) {
    console.info("Insert like error: ", error.message);
    return null;
  }
};

export const increaseLike = (client) => async (id) => {
  try {
    const { data: response } = await client.post(
      `publications/like/add-one/${id}`
    );
    console.info("Increase one like service data: ", response);
    return response;
  } catch (error) {
    console.info("Increase one like service error: ", error.message);
    return null;
  }
};
