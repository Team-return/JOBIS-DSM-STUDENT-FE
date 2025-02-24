"use client";

import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "취업 완료", value: 59, color: "#237BC9" },
  { name: "취업 전", value: 16, color: "rgba(35, 123, 201, 0.2)" },
];

export default function JobPieChart() {
  return (
    <div className="flex flex-col items-center bg-[#FFF] rounded-xl pt-[24px] pb-[27px] pr-9  gap-8">
      <div className="w-full">
        <div className="flex flex-col items-end w-full">
          <div>
            <div className="flex items-center gap-1">
              <div className="w-[6px] h-[6px] rounded-xl bg-[#237BC9]"></div>
              <span className="text-caption font-m text-subBlue">취업완료</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[6px] h-[6px] rounded-xl bg-[#CCC]"></div>
              <span className="text-caption font-m text-[#7F7F7F]">
                취업 전
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] items-center relative">
          <PieChart width={160} height={160}>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={40}
              outerRadius={70}
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-b2 font-b text-primaryBlue03">
            99%
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[34px]">
        <div className="flex flex-col gap-3 items-center">
          <p className="text-primaryBlue03 font-m text-caption">전체 취업률</p>
          <p className="text-primaryBlue03 font-m text-h6">100%</p>
        </div>
        <div className="w-[1px] h-[26px] bg-[#E5E5E5]"></div>
        <div className="flex flex-col gap-3 items-center">
          <p className="text-primaryBlue03 font-m text-caption">전체 통계</p>
          <p className="text-primaryBlue03 font-m text-h6">59/75명</p>
        </div>
      </div>
    </div>
  );
}
