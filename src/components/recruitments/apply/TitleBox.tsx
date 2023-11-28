import React from "react";

interface PropsType {
  title: string;
  children: React.ReactNode;
}

export default function TitleBox({ title, children }: PropsType) {
  return (
    <div className="w-full">
      <p className="mb-4 text-black text-h6 leading-h6 font-b">{title}</p>
      <hr className="border-[#cccccc] mb-6" />
      <div className="flex flex-col gap-[60px]">{children}</div>
    </div>
  );
}
