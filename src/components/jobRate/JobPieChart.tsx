"use client";

import { useTotalEmplymentStats } from "@/apis/applications";
import { useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function JobPieChart({ year }: { year: number }) {
  const { data: employmentData, isLoading } = useTotalEmplymentStats(year);

  const passedCount = employmentData?.passed_count || 0;
  const totalStudentCount = employmentData?.total_student_count || 1;

  const data = [
    {
      name: "취업 완료",
      value: passedCount,
      color: "#237BC9",
      id: 1,
    },
    {
      name: "취업 전",
      value: totalStudentCount - passedCount,
      color: "rgba(35, 123, 201, 0.2)",
      id: 2,
    },
  ];

  if (isLoading || !employmentData) {
    return (
      <div className="flex flex-col items-center bg-[#FFF] rounded-xl pt-[24px] pb-[27px] pr-9 gap-8 border border-[#E5E5E5] animate-pulse">
        <div className="w-full flex justify-end mb-2">
          <div className="w-24 h-6 bg-[#eee] rounded" />
        </div>
        <div className="flex flex-col gap-[10px] items-center relative">
          <div className="w-[160px] h-[160px] rounded-full bg-[#f5f5f5]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-b2 font-b text-primaryBlue03">
            --
          </div>
        </div>
        <div className="flex justify-center items-center gap-[34px] w-full">
          <div className="flex flex-col gap-3 items-center">
            <div className="w-28 h-4 bg-[#eee] rounded" />
            <div className="w-20 h-6 bg-[#eee] rounded mt-1" />
          </div>
          <div className="w-[1px] h-[26px] bg-[#E5E5E5]" />
          <div className="flex flex-col gap-3 items-center">
            <div className="w-28 h-4 bg-[#eee] rounded" />
            <div className="w-24 h-6 bg-[#eee] rounded mt-1" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-[#FFF] rounded-xl pt-[24px] pb-[27px] pr-9  gap-8 border border-[#E5E5E5]">
      <div className="w-full">
        <div className="flex flex-col items-end w-full">
          <div>
            <div className="flex items-center gap-1">
              <div className="w-[6px] h-[6px] rounded-xl bg-[#237BC9]"></div>
              <span className="text-caption font-m text-subBlue">취업완료</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[6px] h-[6px] rounded-xl bg-[#CCC]" />
              <span className="text-caption font-m text-[#7F7F7F]">
                취업 전
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] items-center relative">
          <PieChart
            width={160}
            height={160}
            style={{ position: "relative", margin: "0 auto" }}
          >
            <Pie
              data={data}
              dataKey="value"
              innerRadius={40}
              outerRadius={70}
              startAngle={90}
              endAngle={-270}
              isAnimationActive={false}
            >
              {data.map((entry) => (
                <Cell
                  key={`cell-${entry.id}`}
                  fill={entry.color}
                  stroke="none"
                />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-b2 font-b text-primaryBlue03">
            {((passedCount / totalStudentCount) * 100).toFixed(1)}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[34px]">
        <div className="flex flex-col gap-3 items-center">
          <p className="text-primaryBlue03 font-m text-caption">전체 취업률</p>
          <p className="text-primaryBlue03 font-m text-h6">
            {((passedCount / totalStudentCount) * 100).toFixed(1)}
          </p>
        </div>
        <div className="w-[1px] h-[26px] bg-[#E5E5E5]"></div>
        <div className="flex flex-col gap-3 items-center">
          <p className="text-primaryBlue03 font-m text-caption">전체 통계</p>
          <p className="text-primaryBlue03 font-m text-h6">{`${passedCount}/${totalStudentCount}명`}</p>
        </div>
      </div>
    </div>
  );
}
