'use client'

import { usePathname } from "next/navigation";
import { GetRecruitmentsDetail } from "@/apis/recruitments";
import RegisterBtn from "@/components/common/Button/RegisterBtn";
import CompanyTitle from "@/components/company/CompanyTitle";
import RecruitmentsTable from "@/components/recruitments/RecruitmentsTable";

export default function RecruitmentsDetailPage() {
  const pathname = usePathname();
  const id = pathname.replace("/recruitments/", "");

  const { data } = GetRecruitmentsDetail(id);
  if (data) {
    const { company_id, company_name, company_profile_url, ...rest } =
      data.data;

    return (
      <div className="w-full my-[56px]">
        <CompanyTitle
          company_name={company_name}
          company_profile_url={company_profile_url}
        >
          <RegisterBtn onClick={() => {}}>지원하기</RegisterBtn>
        </CompanyTitle>
        <RecruitmentsTable {...rest} />
      </div>
    );
  }
}
