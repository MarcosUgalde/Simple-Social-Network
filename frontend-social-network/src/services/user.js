export const info = (client) => async () => {
  try {
    const { data: response } = await client.get("/user");
    console.info("User info data: ", response);
    return response.data;
  } catch (error) {
    console.info("User info error: ", error.message);
    return null;
  }
};

export const usersByUsername = (client) => async (params) => {
  try {
    // const queryParams = { username: params };
    console.log("params received in service: ", params);
    const { data: response } = await client.get(
      `/user/search-result/${params?.name}`,
      params
    );
    console.info("Users searched: ", response);
    return response.content;
  } catch (error) {
    console.info("Users search by username service error: ", error.message);
    return { success: false, error: error.message };
  }
};
