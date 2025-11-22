"use client";

import { useEmploymentStats } from "@/apis/applications";
const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
import useGetClass from "@/util/getClassName";

export default function JobCurrentSituation({ year }: { year: number }) {
  const { data, isLoading } = useEmploymentStats(year);
  if (isLoading || !data) {
    return (
      <div className="bg-white rounded-xl p-6 border border-[#E5E5E5] animate-pulse">
        <div className="flex justify-between items-center mb-4">
          <div className="w-40 h-6 bg-[#eee] rounded" />
          <div className="w-24 h-6 bg-[#eee] rounded" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-[#fafafa] rounded">
            <div className="w-32 h-4 bg-[#eee] rounded mb-2" />
            <div className="w-full h-6 bg-[#eee] rounded" />
          </div>
          <div className="p-4 bg-[#fafafa] rounded">
            <div className="w-32 h-4 bg-[#eee] rounded mb-2" />
            <div className="w-full h-6 bg-[#eee] rounded" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full grid grid-cols-2 gap-10 ">
      {data?.classes.map((classItem) => {
        return (
          <div key={classItem.class_id} className="flex flex-col gap-4">
            <header className="flex items-center justify-between pr-[17px]">
              <span className="text-h6 font-b">
                {useGetClass(classItem.class_id)}
              </span>
              <span className="text-b3 font-m text-subBlue">
                {classItem.passed_students}/{classItem.total_students}
              </span>
            </header>

            <div className="pt-[12px] px-[18px] pb-[16px] border border-[#E5E5E5] bg-[#fff] rounded-md grid grid-cols-4 gap-2">
              {classItem.employment_rate_response_list.map((data) => (
                <div
                  key={data.id}
                  className="bg-[#fff] rounded-md p-1 flex flex-col items-center justify-center gap-1"
                >
                  <div className="w-[100px] h-[40px] overflow-hidden rounded-md flex items-center justify-center bg-white shadow-[0px_4px_20px_rgba(112,144,176,0.12)]">
                    <img
                      src={`${BASE_URL}/${data.logo_url}`}
                      alt={`${data.company_name} 로고`}
                      className="object-contain w-[100px] h-[40px]"
                    />
                  </div>
                  <div className="text-[#7F7F7F] text-caption truncate text-center w-[100px]">
                    {data.company_name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
