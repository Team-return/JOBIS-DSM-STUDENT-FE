import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios";
import { ApplicationsResponseType } from "./type";

const router = "/applications";

export function GetApplications() {
  return useQuery(["GetApplications"], async () => {
    const { data } = await instance.get<ApplicationsResponseType>(
      `${router}/students`
    );
    return data;
  });
}
