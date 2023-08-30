import { useMutation } from "@tanstack/react-query";
import { useToastStore } from "@team-return/design-system";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { instance } from "../axios";
import { ResponseBody } from "../user/type";
import { RequestBody } from "./type";

const router = "students";
//a
export const Signup = () => {
  const [, setCookie] = useCookies();
  const navigator = useRouter();
  const { append } = useToastStore();

  return useMutation(
    async (body: RequestBody) => {
      const response = await instance.post<ResponseBody>(`${router}`, body);
      return response.data;
    },
    {
      onSuccess: (res) => {
        const accessExpires = new Date(res.access_expires_at);
        const refreshExpires = new Date(res.refresh_expires_at);
        setCookie("access_token", res.access_token, {
          path: "/",
          expires: accessExpires,
        });
        setCookie("refresh_token", res.refresh_token, {
          path: "/",
          expires: refreshExpires,
        });
        navigator.push("/");
      },
      onError: (err: AxiosError) => {
        switch (err.response?.status) {
          case 400:
            append({
              title: "입력오류",
              message: "입력값을 다시 확인해주세요",
              type: "RED",
            });
            break;
          case 404:
            append({
              title: "계정오류",
              message: "등록되지 않은 계정입니다",
              type: "RED",
            });
            break;
          case 409:
            append({
              title: "",
              message: "이미 계정이 존재합니다",
              type: "RED",
            });
            break;
          default:
            append({
              title: "시스템오류",
              message: "개발자에게 문의하세요",
              type: "RED",
            });
            break;
        }
      },
    }
  );
};
