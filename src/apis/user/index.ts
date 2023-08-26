'use clinet'

import { useToastStore } from "@team-return/design-system";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { instance } from "../axios";
import { RequestBody, ResponseBody } from "./type";
import { useState } from "react";
  
const router = "/users";

export const Login = (body: RequestBody, checkBoxValue: boolean) => {
  // const [cookie, setCookie, removeCookie] = useCookies();
  const navigator = useRouter();
  const { append } = useToastStore();

  console.log("login");

  return useMutation(
    async () => {
      const response = await instance.post(`${router}/login`, body);
      return response.data;
    },
    {
      onSuccess: (res) => {
        if (res.authority !== "STUDENT") {
          append({
            title: "해당 서비스를 사용할 수 없는 계정입니다.",
            message: "",
            type: "RED",
          });
        } else {
          const accessExpires = new Date(res.access_expires_at);
          const refreshExpires = new Date(res.refresh_expires_at);
          // setCookie("access_token", res.access_token, {
          //   path: "/",
          //   expires: accessExpires,
          // });
          // setCookie("refresh_token", res.refresh_token, {
          //   path: "/",
          //   expires: refreshExpires,
          // });
          // if (checkBoxValue) {
          //   setCookie("account_id", body.account_id, {
          //     path: "/",
          //   });
          // } else {
          //   removeCookie("account_id");
          // }
          navigator.push("/");
        }
      },
      onError: (error) => {},
    }
  );
};
