import { useQuery } from "react-query";
import { user } from "../services";

export const useSearch = (username) => {
  console.log("username received in hook: ", username);
  const { data, isLoading } = useQuery(
    ["search-result", username],
    () => user.userSearch(username),
    { enabled: Boolean(username) }
  );
  console.log("search Hook data: ", data);

  return { data, isLoading };
};
