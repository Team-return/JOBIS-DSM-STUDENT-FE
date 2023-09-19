import axios, { AxiosError } from "axios";
import { Cookies } from "react-cookie";
import { ReissueToken } from "./auth";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
});

const cookies = new Cookies();

instance.interceptors.request.use(
  (config) => {
    const accessToken = cookies.get("access_token");
    const returnConfig = {
      ...config,
    };
    if (accessToken) {
      returnConfig.headers!["Authorization"] = `Bearer ${accessToken}`;
    }
    return returnConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<AxiosError>) => {
    if (axios.isAxiosError(error) && error.response) {
      const { config } = error;
      const refreshToken = cookies.get("refresh_token");
      if (
        error.response.data.message === "Invalid Token" ||
        error.response.data.message === "Token Expired" ||
        error.message === "Request failed with status code 403"
      ) {
        if (refreshToken) {
          cookies.remove("access_token");
          ReissueToken(refreshToken)
            .then((res) => {
              const accessExpired = new Date(res.access_expires_at);
              const refreshExpired = new Date(res.refresh_expires_at);
              cookies.set("access_token", res.access_token, {
                expires: accessExpired,
              });
              cookies.set("refresh_token", res.refresh_token, {
                expires: refreshExpired,
              });
              if (config!.headers)
                config!.headers["Authorization"] = `Bearer ${res.access_token}`;
              return axios(config!);
            })
            .catch(() => {
              cookies.remove("access_token");
              cookies.remove("refresh_token");
              window.location.href = "/account/login";
            });
        } else {
          window.location.href = "/account/login";
        }
      } else return Promise.reject(error);
    }
  }
);
