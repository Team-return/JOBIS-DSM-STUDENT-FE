import React from "react";

interface PropsType {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

export default function ShadowBox({ children, width, height }: PropsType) {
  return (
    <div
      className={`bg-white rounded-[8px] shadow-elevaiton`}
      style={{ width: width, height: height }}
    >
      {children}
    </div>
  );
}
