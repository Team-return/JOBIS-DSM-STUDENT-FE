import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CodeType, GetCodeType } from "./type";

const router = "/codes";

export const useGetCode = (
  type: CodeType,
  keyword?: string,
  parent_code?: number
) => {
  return useQuery(["GetCode", type, keyword, parent_code], async () => {
    const { data } = await axios.get<GetCodeType>(
      `${process.env.NEXT_PUBLIC_BASE_URL}${router}?type=${type}&keyword=${
        keyword || ""
      }&parent_code=${parent_code || ""}`
    );
    return data;
  });
};
