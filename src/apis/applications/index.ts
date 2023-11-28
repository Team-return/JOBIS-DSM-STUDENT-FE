import { useMutation, useQuery } from "@tanstack/react-query";
import { useToastStore } from "@team-return/design-system";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { instance } from "../axios";
import { ApplicationsResponseType, ApplyRequestItmeType } from "./type";

const router = "/applications";

export default function useApplyToCompany(recruitmentId: string) {
  const navigator = useRouter();
  const { append } = useToastStore();
  return useMutation(
    async function (body: ApplyRequestItmeType[]) {
      return await instance.post(`${router}/${recruitmentId}`, {
        attachments: body,
      });
    },
    {
      onSuccess: () => {
        navigator.push("/mypage");
      },
      onError: (error: AxiosError) => {
        switch (error.response?.status) {
          case 401:
            append({
              title: "",
              message: "3학년이 아닌 학생은 지원할 수 없습니다.",
              type: "RED",
            });
            break;
          case 404:
            append({
              title: "",
              message: "모집의뢰서가 존재하지 않습니다.",
              type: "RED",
            });
            break;
          case 409:
            append({
              title: "",
              message:
                "이미 해당 모집의뢰에 지원했거나 승인된 지원요청이 존재합니다.",
              type: "RED",
            });

          default:
            break;
        }
      },
    }
  );
}


export function useGetApplications() {
  return useQuery(["GetApplications"], async () => {
    const { data } = await instance.get<ApplicationsResponseType>(
      `${router}/students`
    );
    return data;
  });
}
