import { useQuery } from "react-query";
import { publications } from "../services";

export const usePostsByUser = (props) => {
  console.log("Props: ", props);
  const { data, isLoading } = useQuery(["all", props?.username], () =>
    publications.getAllPublicationsByUser(props?.username)
  );

  return { data, isLoading };
};
