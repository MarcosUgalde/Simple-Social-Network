import { useQuery } from "react-query";
import { publications } from "../services";

export const useOnePublication = (props) => {
  const { data, isLoading } = useQuery(
    ["publication", props?.publicationId],
    () => publications.getOnePublication
  );

  return { data, isLoading };
};
