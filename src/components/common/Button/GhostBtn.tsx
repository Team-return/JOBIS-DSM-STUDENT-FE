"use client";

import React, { useEffect, useState } from "react";

interface PropsType {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

function GhostBtn({ children, onClick, disabled = false }: PropsType) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <button
      className="h-[36px] py-2 px-3 text-b3 leading-b3 font-m border border-solid border-[#135C9D] rounded-[8px]"
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      style={
        disabled
          ? { opacity: 0.3, backgroundColor: "white", color: "#135C9D" }
          : {
              backgroundColor: isHover ? "#135C9D" : "white",
              color: isHover ? "white" : "#135C9D",
            }
      }
    >
      {children}
    </button>
  );
}

export default GhostBtn;
