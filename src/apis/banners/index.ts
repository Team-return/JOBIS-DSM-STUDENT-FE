import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios";
import { BannerResponse } from "./type";

const router = "/banners";

export const useGetBanners = () => {
  return useQuery(["GetBanners"], async () => {
    const { data } = await instance.get<BannerResponse>(`${router}`);
    return data;
  });
};
