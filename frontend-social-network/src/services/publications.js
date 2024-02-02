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
