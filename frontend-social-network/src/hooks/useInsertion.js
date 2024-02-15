import { useMutation } from "react-query";
import { useLocation } from "wouter";
import { publications } from "../services";

export const useInsertion = () => {
  const [, setLocation] = useLocation();

  const { mutate: insertPublication } = useMutation({
    mutationFn: publications.insertPublication,
    onSuccess: (data) => {
      if (data.success) setLocation("/");
      console.info("Post created: ", data);
    },
  });
  return insertPublication;
};
