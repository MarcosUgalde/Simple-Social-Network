import { useQuery } from "react-query";
import { publications } from "../services";

export const usePostsByUser = (props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["all", props.authorId],
    queryFn: publications.getAllPublicationsByUser,
  });

  return { data, isLoading };
};
