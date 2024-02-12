import { useMutation } from "react-query";
import { publications } from "../services";

export const useLike = (props) => {
  //   const { data } = useQuery(["publication", props?.publicationId], () =>
  //     publications.addLike(props?.publicationId)
  //   );
  //   console.log("useLike: ", data);

  //   return { data };

  const mutationFn = async () => {
    const data = await publications.addLike(props?.publicationId);
    return data;
  };

  const { mutate: addLike } = useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (data.success) console.info("Like añadido");
    },
  });

  return addLike;
};
