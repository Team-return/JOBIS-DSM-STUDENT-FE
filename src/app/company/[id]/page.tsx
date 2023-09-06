"use client";

import Table from "@/components/common/Table";
import CompanyTitle from "@/components/company/CompanyTitle";
import styled from "@emotion/styled";

export default function CompanyDetialPage() {
  return (
    <Warpper>
      <CompanyTitle
        business_number="111-11-11111"
        company_name="이름"
        company_profile_url="https://jobis-file.s3.ap-northeast-2.amazonaws.com/LOGO_IMAGE/afe069fb-20a7-4415-9e37-f57ff2bac9de.png"
        onClickRecruitments={() => {
          console.log("모집의뢰서 조회");
        }}
        onClickInterview={() => {
          console.log("후기 조회");
        }}
      />
      <Table />
    </Warpper>
  );
}

const Warpper = styled.div`
  width: 100%;
  margin-top: 56px;
`;
