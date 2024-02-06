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
