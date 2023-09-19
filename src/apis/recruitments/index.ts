import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { instance } from "../axios";
import { RecruitmentsDetailType, RecruitmentsListResponseType } from "./type";

const router = "/recruitments";

export const GetRecruitmentsList = (queryString: string) => {
  const [cookie] = useCookies(["access_token"]);

  return useQuery(
    ["getRecruitmentsList", queryString],
    async () =>
      await instance.get<RecruitmentsListResponseType>(
        `${router}/student?${queryString}`,
        {
          headers: {
            Authorization: `Bearer ${cookie.access_token}`,
          },
        }
      )
  );
};

export const GetRecruitmentsDetail = (id: string) => {
  const [cookie] = useCookies(["access_token"]);
  return useQuery(
    ["getRecruitmentsDetail", id],
    async () =>
      await instance.get<RecruitmentsDetailType>(`${router}/${id}`, {
        headers: {
          Authorization: `Bearer ${cookie.access_token}`,
        },
      })
  );
};
