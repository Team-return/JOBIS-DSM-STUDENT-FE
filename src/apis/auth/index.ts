import { useMutation } from "@tanstack/react-query";
import { useToastStore } from "@team-return/design-system";
import { Axios, AxiosError } from "axios";
import { instance } from "../axios";
import { AuthCode, IAuthorizationResponse, SendAuthCodeType } from "./type";

const router = "/auth";

export const ReissueToken = async (refresh_token: string) => {
  const response = await instance.put<IAuthorizationResponse>(
    `${router}/reissue`,
    null,
    {
      headers: {
        "X-Refresh-Token": `${refresh_token}`,
      },
    }
  );
  return response.data;
};

export const SendAuthCode = () => {
  const { append } = useToastStore();

  return useMutation(
    async (body: SendAuthCodeType) => {
      const response = await instance.post(`${router}/code`, body);
      return response.data;
    },
    {
      onSuccess: (res) => {
        append({
          title: "이메일 발송",
          message: "이메일을 확인해주세요",
          type: "GREEN",
        });
      },
      onError: (err: AxiosError) => {
        switch (err.response?.status) {
          case 409:
            append({
              title: "",
              message: "이미 계정이 존재합니다",
              type: "RED",
            });
            break;
          case 400:
            append({
              title: "입력오류",
              message: "이메일을 확인해주세요",
              type: "RED",
            });
            break;
          case 404:
            break;
          default:
            append({
              title: "시스템오류",
              message: "개발자에게 문의하세요",
              type: "RED",
            });
        }
      },
    }
  );
};

export const CheckAuthCode = () => {
  const { append } = useToastStore();
  return useMutation(
    async (query_string: AuthCode) => {
      const response = await instance.patch(
        `${router}/code?email=${query_string.email}&auth_code=${query_string.auth_code}`
      );
      return response.data;
    },
    {
      onSuccess: () => {},
      onError: (err: AxiosError) => {
        const response = err.response;
        switch (response?.status) {
          case 401:
            append({
              title: "",
              message: "인증번호가 잘못되었습니다.",
              type: "RED",
            });
            break;
          case 404:
            append({
              title: "",
              message: "메일을 확인해주세요",
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
        return response?.data;
      },
    }
  );
};
