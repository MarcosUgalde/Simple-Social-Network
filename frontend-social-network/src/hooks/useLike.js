import { useMutation } from "react-query";
import { publications } from "../services";
import { useLocation } from "wouter";

export const useLike = (props) => {
  //   const { data } = useQuery(["publication", props?.publicationId], () =>
  //     publications.addLike(props?.publicationId)
  //   );
  //   console.log("useLike: ", data);

  //   return { data };

  const [, setLocation] = useLocation();

  const mutationFn = async () => {
    const data = await publications.addLike(props?.publicationId);
    return data;
  };

  const { mutate: addLike } = useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (data.success) setLocation("/");
      console.info("Like añadido");
    },
  });

  return addLike;
};
