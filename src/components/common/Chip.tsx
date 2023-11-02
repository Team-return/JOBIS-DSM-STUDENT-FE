"use client";

import { TechCodeResponensType } from "@/util/type";
import React from "react";

interface PropsType {
  value: TechCodeResponensType[];
  setSelect: React.Dispatch<React.SetStateAction<TechCodeResponensType[]>>;
  select: TechCodeResponensType[];
}

function Chip({ value, setSelect, select }: PropsType) {
  return (
    <div className="flex flex-wrap w-full max-h-full gap-2 overflow-y-scroll">
      {value.map((item, idx) => {
        const isSelect = select.some(
          (cookieItem) => item.code === cookieItem.code
        );
        return (
          <div
            key={idx}
            className="px-4 py-[6px] rounded-[30px] text-caption leading-caption cursor-pointer h-[30px]"
            style={
              isSelect
                ? {
                    backgroundColor: "rgba(35,123,201,0.12)",
                    color: "rgba(35,123,201,0.8)",
                  }
                : { backgroundColor: "#f7f7f7", color: "#7f7f7f" }
            }
            onClick={() => {
              if (!isSelect) {
                setSelect((prev) => [...prev, item]);
              } else
                setSelect((prev) => {
                  return prev.filter((select) => select.code !== item.code);
                });
            }}
          >
            {item.keyword}
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(Chip);
