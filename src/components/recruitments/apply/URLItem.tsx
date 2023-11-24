import { Icon } from "@team-return/design-system";
import { useState } from "react";

interface PropsType {
  url: string;
  prepend?: () => void;
}

export default function URLItem({ url, prepend }: PropsType) {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className="flex w-full gap-5 bg-[#f7f7f7] rounded-[8px] py-[10px] px-[14px] items-center mt-2"
    >
      <p className="flex-1 text-caption leading-caption font-r text-[#333333] drag">
        {url}
      </p>
      {isHover && prepend && (
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={prepend}
        >
          <Icon icon="Close" color="error" size={18} />
        </div>
      )}
    </div>
  );
}
