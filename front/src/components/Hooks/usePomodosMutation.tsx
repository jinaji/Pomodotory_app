import { useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../../axios";

export const usePomodosMutation = async () => {
  const queryClient = useQueryClient();

  return useMutation(
    (title: string) => axiosInstance.post(`pomodos/${title}`),
    {
      onSuccess: (data) => {
        queryClient.setQueryData("getPomodos", data);
      },
    }
  );
};
