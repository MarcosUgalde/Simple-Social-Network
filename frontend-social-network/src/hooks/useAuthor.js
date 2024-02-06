import { useQuery } from "react-query";
import { publications } from "../services";

export const useAuthor = (props) => {
  const { data, isLoading } = useQuery(["user", props?.authorId], () =>
    publications.getAuthor(props?.authorId)
  );
  console.log("Author Hook: ", data);

  return { data, isLoading };
};
