import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { instance } from "../axios";
import { CompaniesDetailsType, CompaniesListResponseType } from "./type";

const router = "/companies";

export const GetCompaniesList = (queryString: string) => {
  return useQuery(["companiesList", queryString], async () => {
    return await instance.get<CompaniesListResponseType>(
      `${router}/student?${queryString}`
    );
  });
};

export const GetCompaniesDetail = (id: string) => {
  return useQuery(
    ["companiesDetails"],
    async () => await instance.get<CompaniesDetailsType>(`${router}/${id}`),
    {
      onError: (error) => {},
    }
  );
};
