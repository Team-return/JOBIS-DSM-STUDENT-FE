import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios";
import {
  getReviewDetailResponseProps,
  getReviewListResponseProps,
} from "./type";

const router = "/reviews";

export const GetReviewList = (companiesId: string) => {
  const { data, isLoading } = useQuery(
    ["getReviewList", companiesId],
    async () =>
      await instance.get<getReviewListResponseProps>(`${router}/${companiesId}`)
  );
  return { data: data?.data, isLoading };
};

export const getReviewDetails = (reviewId: string) => {
  const { data, isLoading } = useQuery(
    ["getReviewDetails", reviewId],
    async () =>
      await instance.get<getReviewDetailResponseProps>(
        `${router}/details/${reviewId}`
      )
  );
  return { data: data?.data, isLoading };
};
