"use client";

import { GetCompaniesDetail } from "@/apis/companies";
import CompanyTable from "@/components/company/CompanyTable";
import CompanyTitle from "@/components/company/CompanyTitle";
import { business_number_regex } from "@/util/regex";
import styled from "@emotion/styled";
import { useToastStore } from "@team-return/design-system";
import { usePathname, useRouter } from "next/navigation";

export default function CompanyDetialPage() {
  const navigator = useRouter();
  const { append } = useToastStore();
  const pathname = usePathname();
  const id = pathname.replace("/company/", "");
  const { data } = GetCompaniesDetail(id);

  if (data) {
    const {
      business_number,
      company_name,
      company_profile_url,
      recruitment_id,
      ...rest
    } = data.data;

    const onClickRecruitments = () => {
      if (recruitment_id) {
        navigator.push(`/recruitments/${recruitment_id}`);
      } else {
        append({
          title: "",
          message: "해당 기업은 모집의뢰서가 없습니다.",
          type: "BLUE",
        });
      }
    };

    return (
      <div className="w-full my-[56px]">
        <CompanyTitle
          business_number={business_number_regex(business_number)}
          company_name={company_name}
          company_profile_url={company_profile_url}
          onClickRecruitments={onClickRecruitments}
          onClickInterview={() => {
            // 후기조회 링크이동
          }}
        />
        <CompanyTable {...rest} />
      </div>
    );
  }
}
