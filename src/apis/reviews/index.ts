import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios";
import {
  getReviewDetailResponseProps,
  getReviewListResponseProps,
} from "./type";

const router = "/reviews";

export const GetReviewList = (companiesId: string) => {
  return useQuery(["getReviewList", companiesId], async () => {
    const { data } = await instance.get<getReviewListResponseProps>(
      `${router}/${companiesId}`
    );
    return data;
  });
};

export const getReviewDetails = (reviewId: string) => {
  return useQuery(["getReviewDetails", reviewId], async () => {
    const { data } = await instance.get<getReviewDetailResponseProps>(
      `${router}/details/${reviewId}`
    );
    return data;
  });
};
