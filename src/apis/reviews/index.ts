import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios";
import {
  getReviewDetailResponseProps,
  getReviewListResponseProps,
} from "./type";

const router = "/reviews";

export const GetReviewList = (companiesId: string) => {
  const response = async () => {
    const { data } = await instance.get<getReviewListResponseProps>(
      `${router}/${companiesId}`
    );
    return data;
  };
  return useQuery(["getReviewList", companiesId], response);
};

export const getReviewDetails = (reviewId: string) => {
  const response = async () => {
    const { data } = await instance.get<getReviewDetailResponseProps>(
      `${router}/details/${reviewId}`
    );
    return data;
  };
  return useQuery(["getReviewDetails", reviewId], response);
};
  