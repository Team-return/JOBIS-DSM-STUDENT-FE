import { instance } from "../axios";
import { IAuthorizationResponse } from "./type";

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
