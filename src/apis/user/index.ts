import { useMutation } from "@tanstack/react-query";
import { useToastStore } from "@team-return/design-system";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { useMyProfile } from "../students";
import { RequestBody, ResponseBody } from "./type";

const router = "/users";

export const useLogin = (body: RequestBody, checkBoxValue: boolean) => {
  const [, setCookie, removeCookie] = useCookies();
  const navigator = useRouter();
  const { append } = useToastStore();

  return useMutation(
    async () => {
      const response = await axios.post<ResponseBody>(
        `${process.env.NEXT_PUBLIC_BASE_URL}${router}/login`,
        body
      );
      return response.data;
    },
    {
      onSuccess: (res) => {
        if (res.authority !== "STUDENT" && res.authority !== "DEVELOPER") {
          append({
            title: "",
            message: "해당 서비스를 이용할 수 없는 계정입니다.",
            type: "RED",
          });
        } else {
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
          if (checkBoxValue) {
            setCookie("account_id", body.account_id);
          } else {
            removeCookie("account_id");
          }
          navigator.push("/");
        }
        useMyProfile()
      },
      onError: (error: AxiosError) => {
        switch (error.response?.status) {
          case 401:
            append({
              title: "계정오류",
              message: "비밀번호가 일치하지 않습니다",
              type: "RED",
            });
            break;
          case 404 | 400:
            append({
              title: "계정오류",
              message: "아이디와 비밀번호를 다시 확인해주세요",
              type: "RED",
            });
            break;
          case 500:
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
