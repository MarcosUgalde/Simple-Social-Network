import { useQueryClient, useMutation } from "react-query";
import { useLocation } from "wouter";
import { publications } from "../services";

export const useDelete = () => {
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const deleteMutation = useMutation(
    (id) => publications.deletePublication(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("publications") &&
          setLocation("/my-profile");
      },
    }
  );

  const deletePublication = (id) => {
    deleteMutation.mutate(id);
  };

  return deletePublication;
};
