import { CodeType } from "./type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const router = "/codes";

export const GetCode = (
  type: CodeType,
  keyword?: string,
  parent_code?: number
) => {
  return useQuery(
    ["GetCode", type, keyword, parent_code],
    async () =>
      await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${router}?type=${type}&keyword=${
          keyword || ""
        }&parent_code=${parent_code || ""}`
      )
  );
};
