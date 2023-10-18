'use client'

import { GetRecruitmentsDetail } from "@/apis/recruitments";
import RegisterBtn from "@/components/common/Button/RegisterBtn";
import CompanyTitle from "@/components/company/CompanyTitle";
import RecruitmentsTable from "@/components/recruitments/RecruitmentsTable";

export default function RecruitmentsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { data } = GetRecruitmentsDetail(params.id);
  if (data) {
    const { company_id, company_name, company_profile_url, ...rest } =
      data.data;

    return (
      <div className="w-full my-[56px]">
        <CompanyTitle
          company_name={company_name}
          company_profile_url={company_profile_url}
        >
          <RegisterBtn>지원하기</RegisterBtn>
        </CompanyTitle>
        <RecruitmentsTable {...rest} />
      </div>
    );
  }
}
