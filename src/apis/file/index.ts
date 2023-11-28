import { useMutation } from "@tanstack/react-query";
import { useToastStore } from "@team-return/design-system";
import { AxiosError } from "axios";
import { instance } from "../axios";
import { UploadFileResponse } from "./type";

const router = "/files";

export const useFileUpload = () => {
  const { append } = useToastStore();
  return useMutation(
    async (files: File[]) => {
      const formData = new FormData();
      files.map((file) => {
        formData.append("file", file);
      });
      const { data }: { data: UploadFileResponse } = await instance.post(
        `${router}?type=EXTENSION_FILE`,
        formData
      );
      return data;
    },
    {
      onError: (error: AxiosError) => {
        if (error.response)
          append({
            title: "",
            message: "파일 업로드에 실패했습니다.",
            type: "RED",
          });
      },
    }
  );
};
