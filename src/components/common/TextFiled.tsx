"use client";

import { Icon, theme } from "@team-return/design-system";
import React, { KeyboardEvent, useState } from "react";

interface PropsType extends React.ComponentProps<"input"> {
  customType?: "Text" | "Search" | "EyesClose" | "EyesOpen";
  iconClick?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  width: string | number;
  height?: string | number;
}

function TextFiled({
  value,
  placeholder,
  onChange,
  customType = "Text",
  name,
  iconClick,
  width,
  height,
  label,
  type,
}: PropsType) {
  const [focus, setFocuse] = useState<boolean>(false);
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") if (iconClick) iconClick();
  };

  return (
    <div style={{ width: typeof width === "number" ? width + "px" : width }}>
      {label && (
        <p className="text-caption text-[#333333] font-m mb-[4px]">{label}</p>
      )}
      <div
        className={`w-full  border border-solid rounded-[8px] flex align-center overflow-hidden`}
        style={{
          borderColor: focus ? theme.color.liteBlue : "#cccccc",
          height: height
            ? typeof height === "number"
              ? height + "px"
              : height
            : "40px",
        }}
      >
        <input
          className="w-full flex-1 h-full px-[16px] border-none text-b3 font-r leading-b3"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          onKeyUp={onKeyDown}
          onFocus={() => {
            setFocuse(true);
          }}
          onBlur={() => {
            setFocuse(false);
          }}
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
