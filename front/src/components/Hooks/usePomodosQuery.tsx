import { useQuery } from "react-query";
import { axiosInstance } from "../../axios";

export const usePomodosQuery = async (title: string) => {
  return useQuery("getPomodos", async () => {
    const response = await axiosInstance.get(`pomodos/${title}`);
    return response.data;
  });
};
