import styled from "@emotion/styled";
import { Icon, theme } from "@team-return/design-system";
import React, { KeyboardEvent, useRef } from "react";

interface PropsType extends React.ComponentProps<"input"> {
  customType?: "Text" | "Search" | "EyesClose" | "EyesOpen";
  iconClick?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  width: string | number;
}

function TextFiled({
  value,
  placeholder,
  onChange,
  customType = "Text",
  name,
  iconClick,
  width,
  label,
  type,
}: PropsType) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") if (iconClick) iconClick();
  };
  return (
    <div>
      {label && (
        <p className="text-caption text-[#333333] font-m mb-[4px]">{label}</p>
      )}
      <div
        className={`h-[40px] w-[${
          typeof width === "number" ? width + "px" : width
        }] border border-[#cccccc] border-solid rounded-[8px] flex align-center overflow-hidden`}
      >
        <input
          className="w-full flex-1 h-full px-[16px] border-none text-b3 font-r leading-b3"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          ref={inputRef}
          onKeyUp={onKeyDown}
        />
        {customType !== "Text" && (
          <div
            className="flex justify-center items-center mr-[14px] cursor-pointer  "
            onClick={iconClick}
          >
            <Icon icon={customType} size={20} color="gray60" />
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(TextFiled);
