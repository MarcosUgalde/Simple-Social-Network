import { useMutation } from "react-query";
import { useLocation } from "wouter";
import { publications } from "../services";

export const useOneLike = () => {
  const [, setLocation] = useLocation();

  const { mutate: addOneLike } = useMutation({
    mutationFn: publications.addOneLike,
    onSuccess: (data) => {
      if (data.success) setLocation("/");
      console.info("Like added to publication");
    },
  });

  return addOneLike;
};
