import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "../axios";

const router = "/bookmarks";

export const GetBookmarks = () => {
  return useQuery(["GetBookmarks"], async () => {
    const { data } = await instance.get(`${router}`);
    return data;
  });
};

export const SetBookmaeks = (recruitmentId: number) => {
  return useMutation(["SetBookmarks", recruitmentId], async () => {
    await instance.patch(`${router}/${recruitmentId}`);
  });
};
