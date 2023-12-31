import { useQuery } from "@tanstack/react-query";
import { useToastStore } from "@team-return/design-system";
import { instance } from "../axios";
import {
  GetNumberOfPagesType,
  RecruitmentsDetailType,
  RecruitmentsListResponseType
} from "./type";

const router = "/recruitments";

export const useGetRecruitmentsList = (queryString: string) => {
  const { append } = useToastStore();
  return useQuery(
    ["getRecruitmentsList", queryString],
    async () => {
      const { data } = await instance.get<RecruitmentsListResponseType>(
        `${router}/student?${queryString}`
      );
      return data;
    },
    {
      onError: () => {
        append({
          title: "",
          message: "불러오기 실패",
          type: "RED",
        });
      },
    }
  );
};

export const useGetRecruitmentsDetail = (id: string) => {
  const { append } = useToastStore();
  return useQuery(
    ["getRecruitmentsDetail", id],
    async () => {
      const { data } = await instance.get<RecruitmentsDetailType>(
        `${router}/${id}`
      );
      return data;
    },
    {
      refetchOnWindowFocus: false,
      onError: () => {
        append({
          title: "",
          message: "불러오기 실패",
          type: "RED",
        });
      },
    }
  );
};

export const useGetNumberOfRecruitmentRequestListPages = (queryString: string) => {
  const { data } = useQuery(
    ["getNumberOfRecruitmentRequestListPages", queryString],
    async () =>
      await instance.get<GetNumberOfPagesType>(
        `${router}/student/count?${queryString}`
      )
  );
  return data;
};
