import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { instance } from "../axios";
import { BookmarkResponseType } from "./type";

const router = "/bookmarks";

export const useGetBookmarks = () => {
  return useQuery(["GetBookmarks"], async () => {
    const { data } = await instance.get<BookmarkResponseType>(`${router}`);
    return data;
  });
};

export const useSetBookmarks = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (recruitmentId: number) => {
      await instance.patch(`${router}/${recruitmentId}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getRecruitmentsList"]);
        queryClient.invalidateQueries(["GetBookmarks"]);
      },
    }
  );
};
