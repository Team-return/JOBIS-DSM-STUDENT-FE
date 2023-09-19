import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { instance } from "../axios";
import { CompaniesDetailsType, CompaniesListResponseType } from "./type";

const router = "/companies";

export const GetCompaniesList = (queryString: string) => {
  const [cookie] = useCookies(["access_token"]);
  return useQuery(["companiesList", queryString], async () => {
    return await instance.get<CompaniesListResponseType>(
      `${router}/student?${queryString}`,
      {
        headers: {
          Authorization: ``,
        },
      }
    );
  });
};

export const GetCompaniesDetail = (id: string) => {
  const [cookie] = useCookies(["access_token"]);
  return useQuery(
    ["companiesDetails"],
    async () =>
      await instance.get<CompaniesDetailsType>(`${router}/${id}`, {
        headers: {
          Authorization: `Bearer ${cookie.access_token}`,
        },
      }),
    {
      onError: (error) => {},
    }
  );
};
