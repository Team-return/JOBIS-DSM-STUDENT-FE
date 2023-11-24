"use client";

import { Icon } from "@team-return/design-system";
import { useEffect, useRef, useState } from "react";
import FilePreview from "./FilePreview";

interface PropsType {
  multiple?: boolean;
  addFilesToRequest: (fileList: File[]) => void;
  isBtnClicked: boolean;
}

export default function FileUploader({
  multiple = false,
  addFilesToRequest,
  isBtnClicked,
}: PropsType) {
  const [fileList, setFileList] = useState<File[]>([]);
  const [isHover, setIsHover] = useState<boolean>(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const addFileList = () => {
    if (fileRef.current?.files?.length) {
      const files = Array.from(fileRef.current?.files);
      setFileList((prev) => [...prev, ...files]);
    } else {
      console.log("파일 추가에 실패하였습니다.");
    }
  };

  const prependFileItem = (fileName: string) => {
    setFileList((prev) => prev.filter((file) => file.name !== fileName));
  };

  useEffect(() => {
    if (isBtnClicked) addFilesToRequest(fileList);
  }, [isBtnClicked]);

  return (
    <div className="w-full">
      <label className="inline-block mb-4">
        <input
          className="hidden"
          ref={fileRef}
          type="file"
          multiple={multiple}
          onChange={addFileList}
        />
        <div
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          className="text-b3 leading-b3 font-r text-[#135C9D] flex gap-2 items-center py-[10px] px-6 border border-[#135C9D] rounded-[4px] hover:bg-[#135C9D] hover:text-white cursor-pointer"
        >
          파일 첨부하기{" "}
          <Icon
            icon="Upload"
            size={16}
            color={isHover ? "gray10" : "liteBlue"}
          />
        </div>
      </label>
      <div className="flex flex-wrap w-full gap-2">
        {fileList.map((file, idx) => (
          <FilePreview
            key={idx}
            fileName={file.name}
            prepend={prependFileItem}
          />
        ))}
      </div>
    </div>
  );
}
