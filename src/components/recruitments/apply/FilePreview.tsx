import React from "react";
import Image from "next/image";
import Clip from "@public/Clip.svg";
import { Icon } from "@team-return/design-system";

interface PropsType {
  fileName: string;
  prepend?: (fileName: string) => void;
  onClick?: () => void;
}

function FilePreview({ fileName, prepend, onClick }: PropsType) {
  return (
    <div
      className="flex gap-1 items-center py-1 px-3 rounded-[20px] bg-[#f7f7f7] hover:opacity-70 relative max-w-[200px]"
      title={fileName}
      onClick={onClick}
    >
      <Image src={Clip} alt="첨부파일" width={16} height={16} />
      <p className="text-b3 leading-b3 font-r text-[#7f7f7f] text-ellipsis whitespace-nowrap overflow-hidden mr-[6px]">
        {fileName}
      </p>
      {prepend && (
        <div
          className="flex items-center justify-center ml-1 cursor-pointer"
          onClick={() => {
            prepend(fileName);
          }}
        >
          <Icon icon="Close" size={16} color="error" />
        </div>
      )}
    </div>
  );
}

export default React.memo(FilePreview);
