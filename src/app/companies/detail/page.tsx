"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useToastStore } from "@team-return/design-system";
import CompanyTable from "@/components/company/CompanyTable";
import CompanyTitle from "@/components/company/CompanyTitle";
import { GetCompaniesDetail } from "@/apis/companies";
import { business_number_regex } from "@/util/regex";

export default function CompanyDetailPage() {
  const navigator = useRouter();
  const params = useSearchParams();
  const { append } = useToastStore();

  const { data } = GetCompaniesDetail(params.get("id")!);

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
        navigator.push(`/recruitments/detail?id=${recruitment_id}`);
      } else {
        append({
          title: "",
          message: "해당 기업은 모집의뢰서가 없습니다.",
          type: "BLUE",
        });
      }
    };

    const onClickReviews = () => {
      navigator.push(`/companies/reviews?id=${params.get("id")!}`);
    };

    return (
      <div className="w-full my-[56px]">
        <CompanyTitle
          business_number={business_number_regex(business_number)}
          company_name={company_name}
          company_profile_url={company_profile_url}
          onClickRecruitments={onClickRecruitments}
          onClickInterview={onClickReviews}
        />
        <CompanyTable {...rest} />
      </div>
    );
  }
}
