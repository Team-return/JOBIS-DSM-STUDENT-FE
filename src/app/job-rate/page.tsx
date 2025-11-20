"use client";

import DropDown from "@/components/common/DropDown";
import JobCurrentSituation from "@/components/jobRate/JobCurrentSituation";
import JobPieChart from "@/components/jobRate/JobPieChart";
import { useState } from "react";

export default function JobRate() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState<number>(currentYear);
  const startYear = 2024;
  const dropdownItems = Array.from(
    { length: Math.max(currentYear, startYear) - startYear + 1 },
    (_, i) => {
      const y = startYear + i;
      return { code: String(y), label: String(y) };
    }
  ).reverse();

  return (
    <div className="flex flex-col pt-16 gap-[12px]">
      <JobPieChart year={year} />
      <div className="flex justify-end">
        <DropDown
          title="연도 선택"
          items={dropdownItems}
          selected={year}
          onClickItem={(itemId: string) => setYear(Number(itemId))}
        />
      </div>
      <JobCurrentSituation year={year} />
    </div>
  );
}
