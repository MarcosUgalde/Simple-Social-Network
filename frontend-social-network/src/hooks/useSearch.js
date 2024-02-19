import { useQuery } from "react-query";
import { user } from "../services";

export const useSearch = (username) => {
  const { data, isLoading } = useQuery(["search-result", username], () =>
    user.userSearch(username)
  );

  return { data, isLoading };
};
