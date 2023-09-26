"use client";

import { theme } from "@team-return/design-system";
import React, { useState } from "react";

export default function RadioBtn() {
  const [select, setSelect] = useState<"MAN" | "WOMAN" | undefined>();

  return {
    select: select,
    RadioBtnComponents: () => (
      <div className="flex w-full gap-3">
        <div
          onClick={() => {
            setSelect("MAN");
          }}
          className="flex-1 border cursor-pointer h-[48px] flex justify-center items-center py-[14px] px-8 text-b3 leading-b3 font-r rounded-[8px]"
          style={
            select === "MAN"
              ? {
                  color: theme.color.liteBlue,
                  borderColor: theme.color.liteBlue,
                }
              : {
                  color: theme.color.gray60,
                  borderColor: theme.color.gray50,
                }
          }
        >
          남자
        </div>
        <div
          onClick={() => {
            setSelect("WOMAN");
          }}
          className="flex-1 border cursor-pointer h-[48px] flex justify-center items-center py-[14px] px-8 text-b3 leading-b3 font-r rounded-[8px]"
          style={
            select === "WOMAN"
              ? {
                  color: theme.color.liteBlue,
                  borderColor: theme.color.liteBlue,
                }
              : {
                  color: theme.color.gray60,
                  borderColor: theme.color.gray50,
                }
          }
        >
          여자
        </div>
      </div>
    ),
  };
}
