"use client";

import { GetApplications } from "@/apis/applications";
import APpliedCompanyItem from "./AppliedICompanyItem";

export default function AppliedCompaniesList() {
  const { data: applications } = GetApplications();

  return (
    <div className="mt-10">
      <p className="text-b1 leading-b1 font-m">내가 지원한 기업</p>
      <div className="flex flex-col gap-3 mt-4">
        {applications?.applications.map((item) => (
          <APpliedCompanyItem {...item} />
        ))}
      </div>
    </div>
  );
}
