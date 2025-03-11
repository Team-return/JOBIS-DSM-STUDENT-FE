"use client";

import { useEmploymentStats } from "@/apis/applications";
import useGetClass from "@/util/getClassName";

export default function JobCurrentSituation() {
  const { data } = useEmploymentStats();

  return (
    <div className="w-full grid grid-cols-2 gap-10">
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

            <div className="px-[18px] py-5 border border-[#E5E5E5] bg-[#fff] rounded-md grid grid-cols-4 gap-2">
              {classItem.employment_rate_response_list.map((data) => (
                <div
                  key={data.id}
                  className="bg-[#fff] border border-[#F7F7F7] rounded-md w-[100px] h-[44px] p-1"
                >
                  <img
                    src={data.logo_url}
                    alt={`${data.company_name} 로고`}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
