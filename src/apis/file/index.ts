import { useMutation } from "@tanstack/react-query";
import { useToastStore } from "@team-return/design-system";
import axios, { AxiosError } from "axios";
import { instance } from "../axios";
import { PresignedURLResponse } from "./type";

const router = "/files";

export const useCreatePresignedURL = () => {
  const { append } = useToastStore();
  return useMutation(
    async (files: File[]) => {
      const body = files.map((file) => ({
        type: "EXTENSION_FILE",
        file_name: file.name,
      }));
      const { data } = await instance.post<PresignedURLResponse>(
        `${router}/pre-signed`,
        {
          files: body,
        }
      );
      return { data, files };
    },
    {
      onSuccess: ({ data, files }) => {
        const { urls } = data;
        urls.map(({ pre_signed_url }, idx) => {
          useRequestPresignedURL(pre_signed_url, files[idx]);
        });
      },
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

export const useRequestPresignedURL = async (
  presignedURL: string,
  file: File
) => await axios.put(presignedURL, file);
