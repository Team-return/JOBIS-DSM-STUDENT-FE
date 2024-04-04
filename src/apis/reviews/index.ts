import { MutationOptions, useMutation, UseMutationOptions, useQuery } from "@tanstack/react-query";
import { useToastStore } from "@team-return/design-system";
import { AxiosError, AxiosResponse } from "axios";
import { instance } from "../axios";
import {
  getReviewDetailResponseProps,
  getReviewListResponseProps,
  createReviewRequestType,
} from "./type";

const router = "/reviews";

export const useGetReviewList = (companiesId: string) => {
  return useQuery(["getReviewList", companiesId], async () => {
    const { data } = await instance.get<getReviewListResponseProps>(
      `${router}/${companiesId}`
    );
    return data;
  });
};

export const useGetReviewDetails = (reviewId: string) => {
  return useQuery(["getReviewDetails", reviewId], async () => {
    const { data } = await instance.get<getReviewDetailResponseProps>(
      `${router}/details/${reviewId}`
    );
    return data;
  });
};

export const useCreateReviews = (options: Omit<UseMutationOptions<AxiosResponse<any, any>, unknown, createReviewRequestType, unknown>, "mutationFn">) => {
  const { append } = useToastStore();
  return useMutation(
    async (body: createReviewRequestType) =>
      await instance.post(`${router}`, body),
    {
      ...options,
      onError: (err: AxiosError) => {
        const { response } = err;
        switch (response?.status) {
          case 400: {
            append({
              title: "",
              message: "입력값은 비어있으면 안됩니다.",
              type: "RED",
            });
            break;
          }
          case 404: {
            if (
              (response as AxiosResponse<{ message: string }>).data.message ===
              "Code Not Found"
            ) {
              append({
                title: "",
                message: "질문 분야가 누락되었습니다.",
                type: "RED",
              });
            }
            break;
          }
        }
      },
    }
  );
};
