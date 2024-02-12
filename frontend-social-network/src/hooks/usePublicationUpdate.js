import { useMutation } from "react-query";
import { useLocation } from "wouter";
import { publications } from "../services";

export const usePublicationUpdate = (props) => {
  const [, setLocation] = useLocation();

  const { mutate: updatePublication } = useMutation({
    mutationFn: publications.updatePublication,
    onSuccess: (data) => {
      if (data.success) setLocation(`/post/${props?.publicationId}`);
      console.info("> Post update completed: ", data);
    },
  });

  return updatePublication;
};
