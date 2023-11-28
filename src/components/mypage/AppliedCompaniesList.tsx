"use client";

import { useGetApplications } from "@/apis/applications";
import APpliedCompanyItem from "./AppliedICompanyItem";
import Docs from "@public/Docs.svg";
import Image from "next/image";

export default function AppliedCompaniesList() {
  const { data: applications } = useGetApplications();

  return (
    <div className="mt-10">
      <p className="text-b1 leading-b1 font-m">내가 지원한 기업</p>
      {!applications?.applications.length && (
        <div className="flex flex-col items-center justify-center w-full h-[50vh]">
          <Image width={140} height={90} src={Docs} alt="DOCS" />
          <p className="text-caption leading-caption font-r text-[#7f7f7f] mt-2">
            아직 지원한 기업이 없어요
          </p>
        </div>
      )}
      <div className="flex flex-col gap-3 mt-4">
        {applications?.applications.map((item) => (
          <APpliedCompanyItem {...item} />
        ))}
      </div>
    </div>
  );
}
