"use client";

import { useTotalEmplymentStats } from "@/apis/applications";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function JobPieChart() {
  const { data: employmentData } = useTotalEmplymentStats();
  const passedCount = employmentData?.passed_count || 0;
  const totalStudentCount = employmentData?.total_student_count || 1;
  const data = [
    {
      name: "취업 완료",
      value: employmentData?.passed_count,
      color: "#237BC9",
      id: 1,
    },
    {
      name: "취업 전",
      value:
        (employmentData?.total_student_count ?? 0) -
        (employmentData?.passed_count ?? 0),
      color: "rgba(35, 123, 201, 0.2)",
      id: 2,
    },
  ];

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
              {data.map((entry, index) => (
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
          <p className="text-primaryBlue03 font-m text-h6">{`${employmentData?.passed_count}/${employmentData?.total_student_count}명`}</p>
        </div>
      </div>
    </div>
  );
}
