"use client";

import React from "react";

interface PropsType {
  children: React.ReactNode;
  onClick?: () => void;
}

function GhostBtn({ children, onClick }: PropsType) {
  return (
    <button
      className="h-[36px] py-2 px-3 text-b3 leading-b3 font-m text-[#135C9D] bg-white border border-solid border-[#135C9D] rounded-[8px] hover:bg-[#135C9D] hover:text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default GhostBtn;
