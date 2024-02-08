import { useQuery } from "react-query";
import { publications } from "../services";

export const useLike = (props) => {
  const { data } = useQuery(["publication", props?.publicationId], () =>
    publications.addLike(props?.publicationId)
  );
  //   console.log("Author Hook: ", data);

  return { data };
};
