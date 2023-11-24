"use client";

import { GetRecruitmentsDetail } from "@/apis/recruitments";
import GhostBtn from "@/components/common/Button/GhostBtn";
import CompanyTitle from "@/components/company/CompanyTitle";
import RecruitmentsTable from "@/components/recruitments/RecruitmentsTable";
import { useRouter, useSearchParams } from "next/navigation";

export default function RecruitmentsDetailPage() {
  const param = useSearchParams();
  const navigator = useRouter();
  const { data: RecruitmentsDetial } = GetRecruitmentsDetail(param.get("id")!);
  if (RecruitmentsDetial) {
    const { company_id, company_name, company_profile_url, ...rest } =
      RecruitmentsDetial;

    return (
      <div className="w-full my-[56px]">
        <CompanyTitle
          company_name={company_name}
          company_profile_url={company_profile_url}
        >
          <GhostBtn
            onClick={() => {
              navigator.push(`/recruitments/apply/?id=${param.get("id")}`);
            }}
          >
            지원하기
          </GhostBtn>
        </CompanyTitle>
        <RecruitmentsTable {...rest} />
      </div>
    );
  }
}
