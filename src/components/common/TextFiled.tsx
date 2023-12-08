"use client";

import { Icon, theme } from "@team-return/design-system";
import React, { KeyboardEvent, useState } from "react";

interface PropsType extends React.ComponentProps<"input"> {
  customType?: "Text" | "Search" | "Password";
  enterEvent?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  width?: string | number;
  height?: string | number;
}

function TextFiled({
  value,
  placeholder,
  onChange,
  customType,
  name,
  enterEvent,
  width,
  height,
  label,
  type = "text",
  className
}: PropsType) {
  const [focus, setFocuse] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const isKeyDownToEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") if (enterEvent) enterEvent();
  };

  return (
    <div
      style={
        width ? { width: typeof width === "number" ? width + "px" : width } : {}
      }
      className={className}
    >
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
          type={type === "password" ? (isHidden ? "password" : "text") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          onKeyUp={isKeyDownToEnter}
          onFocus={() => {
            setFocuse(true);
          }}
          onBlur={() => {
            setFocuse(false);
          }}
        />
        {customType === "Password" && (
          <div
            className="flex justify-center items-center mr-[14px] cursor-pointer"
            onClick={() => setIsHidden((prev) => !prev)}
          >
            <Icon
              icon={isHidden ? "EyesClose" : "EyesOpen"}
              size={20}
              color="gray60"
            />
          </div>
        )}
        {customType === "Search" && (
          <div
            className="flex justify-center items-center mr-[14px] cursor-pointer"
            onClick={enterEvent}
          >
            <Icon icon="Search" size={20} color="gray60" />
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(TextFiled);
