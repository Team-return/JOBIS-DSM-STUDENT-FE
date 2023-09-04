import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { instance } from "../axios";

const router = "/companies";

export const GetCompaniesList = (queryString: string) => {
  const [cookie] = useCookies(["access_token"]);
  const res = useQuery(
    ["companiesList"],
    async () =>
      await instance.get(`${router}/student?${queryString}`, {
        headers: {
          Authorization: `Bearer ${cookie.access_token}`,
        },
      })
  );
};
