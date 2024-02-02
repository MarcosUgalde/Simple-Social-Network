import { useQuery } from "react-query";
import { publications } from "../services";

export const usePublications = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["all"],
    queryFn: publications.getPublications,
  });

  return { data, isLoading };
};
