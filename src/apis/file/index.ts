import { useMutation } from "@tanstack/react-query";
import { instance } from "../axios";
import { UploadFileResponse } from "./type";

const router = "/files";

export const FileUpload = () => {
  return useMutation(async (files: File[]) => {
    const formData = new FormData();
    files.map((file) => {
      formData.append("file", file);
    });
    const { data }: { data: UploadFileResponse } = await instance.post(
      `${router}?type=EXTENSION_FILE`,
      formData
    );
    return data;
  });
};
