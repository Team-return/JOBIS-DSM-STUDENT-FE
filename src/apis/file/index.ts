import { useMutation } from "@tanstack/react-query";
import { instance } from "../axios";

const router = "/files";

export const FileUpload = (files: File[]) => {
  const formData = new FormData();
  files.map((file) => {
    formData.append("file", file);
  });
  return useMutation(async () => {
    const { data } = await instance.post(
      `${router}?type=EXTENSION_FILE`,
      formData
    );
    return data;
  });
};
