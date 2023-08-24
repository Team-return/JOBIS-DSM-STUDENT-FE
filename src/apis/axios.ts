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
  async (response) => response,
  async (error: AxiosError<AxiosError>) => {
    if (axios.isAxiosError(error) && error.response) {
      const {
        config,
        response: { status },
      } = error;
      const refreshToken = cookies.get("refresh_token");

      if (error.response.data.message === "Invalid Token" || status === 403) {
        const originalRequest = config;

        if (refreshToken) {
          ReissueToken(refreshToken).then((res) => {
            const accessExpred = new Date(res.access_expires_at);
            const refreshExpred = new Date(res.refresh_expires_at);

            cookies.set("access_token", res.access_token, {
              expires: accessExpred,
              path: "/",
            });
            cookies.set("refresh_token", res.refresh_token, {
              expires: refreshExpred,
              path: "/",
            });
            if(originalRequest!.headers) originalRequest!.headers["Authorization"] = `Bearer ${res.access_token}`
          });
        }
      }
    }
  }
);
