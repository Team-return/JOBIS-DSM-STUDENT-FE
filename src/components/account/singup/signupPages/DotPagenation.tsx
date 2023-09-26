"use client";

import React from "react";
import { theme } from "@team-return/design-system";
import { useSearchParams } from "next/navigation";

function DotPagenation() {
  const params = useSearchParams();
  const page = params.get("page");
  return (
    <div className="absolute top-0 flex gap-2 right-2">
      <Dot activate={page === "1"} />
      <Dot activate={page === "2"} />
    </div>
  );
}

const Dot = ({ activate }: { activate: boolean }) => {
  return (
    <div
      className={`w-2 h-2 rounded-[10px]`}
      style={{
        backgroundColor: activate ? theme.color.liteBlue : theme.color.gray40,
      }}
    />
  );
};

export default React.memo(DotPagenation);
