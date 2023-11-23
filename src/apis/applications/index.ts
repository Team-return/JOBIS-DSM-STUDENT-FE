import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { instance } from "../axios";
import { ApplyRequestItmeType } from "./type";

const router = "/applications";

export default function ApplyToCompany(recruitmentId: string) {
  const navigator = useRouter();
  return useMutation(
    async function (body: ApplyRequestItmeType[]) {
      return await instance.post(`${router}/${recruitmentId}`, {
        attachments: body,
      });
    },
    {
      onSuccess: () => {
        navigator.push('/mypage')
      },
    }
  );
}
