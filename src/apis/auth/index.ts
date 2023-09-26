import { useMutation, UseMutationOptions } from "@tanstack/react-query";
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
      onSuccess: () => {
        append({
          title: "이메일 발송",
          message: "이메일을 확인해주세요",
          type: "GREEN",
        });
      },
      onError: (err: AxiosError) => {
        switch (err.response?.status) {
          case 400:
            append({
              title: "입력오류",
              message: "이메일을 확인해주세요",
              type: "RED",
            });
            break;
          case 404:
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
        }
      },
    }
  );
};

export const CheckAuthCode = (
  query_string: AuthCode,
  options?: Omit<
    UseMutationOptions<any, AxiosError<unknown, any>, void, unknown>,
    "mutationFn"
  >
) => {
  const { append } = useToastStore();
  return useMutation(
    async () => {
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
              message: "이메일이 잘못되었습니다.",
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
        return false;
      },
      ...options,
    }
  );
};
