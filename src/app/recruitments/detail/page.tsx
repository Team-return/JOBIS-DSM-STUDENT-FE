"use client";

import { GetRecruitmentsDetail } from "@/apis/recruitments";
import GhostBtn from "@/components/common/Button/GhostBtn";
import CompanyTitle from "@/components/company/CompanyTitle";
import RecruitmentsTable from "@/components/recruitments/RecruitmentsTable";
import { useSearchParams } from "next/navigation";

export default function RecruitmentsDetailPage() {
  const param = useSearchParams();
  const { data } = GetRecruitmentsDetail(param.get("id")!);
  if (data) {
    const { company_id, company_name, company_profile_url, ...rest } =
      data.data;

    return (
      <div className="w-full my-[56px]">
        <CompanyTitle
          company_name={company_name}
          company_profile_url={company_profile_url}
        >
          <GhostBtn>지원하기</GhostBtn>
        </CompanyTitle>
        <RecruitmentsTable {...rest} />
      </div>
    );
  }
}
