import { useQuery } from "@tanstack/react-query";
import { useToastStore } from "@team-return/design-system";
import { instance } from "../axios";
import { GetNumberOfPagesType } from "../recruitments/type";
import { CompaniesDetailsType, CompaniesListResponseType } from "./type";

const router = "/companies";

export const useGetCompaniesList = (queryString: string) => {
  const { append } = useToastStore();
  return useQuery(
    ["companiesList", queryString],
    async () => {
      return await instance.get<CompaniesListResponseType>(
        `${router}/student?${queryString}`
      );
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

export const useGetCompaniesDetail = (id: string) => {
  const { append } = useToastStore();
  return useQuery(
    ["companiesDetails"],
    async () => await instance.get<CompaniesDetailsType>(`${router}/${id}`),
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

export const useGetNumberOfCompaniesListPages = (queryString: string) => {
  const { data } = useQuery(
    ["getNumberOfCompaniesListPages", queryString],
    async () =>
      await instance.get<GetNumberOfPagesType>(
        `${router}/student/count?${queryString}`
      )
  );
  return data;
};
