import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { instance } from "../axios";
import { RecruitmentsDetailType, RecruitmentsListResponseType } from "./type";

const router = "/recruitments";

export const GetRecruitmentsList = (queryString: string) => {
  return useQuery(
    ["getRecruitmentsList", queryString],
    async () =>
      await instance.get<RecruitmentsListResponseType>(
        `${router}/student?${queryString}`
      )
  );
};

export const GetRecruitmentsDetail = (id: string) => {
  return useQuery(
    ["getRecruitmentsDetail", id],
    async () => await instance.get<RecruitmentsDetailType>(`${router}/${id}`)
  );
};
