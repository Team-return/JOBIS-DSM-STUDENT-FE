import React from "react";
import { CompanyInfo } from "@/util/Type/CompanyInfoType";
import CompanyCard from "./CompanyCard";
import RecruitmentsCard from "./RecruitmentsCard";

//================================================================================

// api 연동 후 아래 더미값 지울 것
// switch case에서 각각의 get api호출
// 필터 적용할 수 있도록 props로 받아오기
// 필터 적용 코드 작성하기

const company_the_me: CompanyInfo[] = [
  {
    id: 1,
    name: "쿼터랩주식회사",
    logo_url: "https://i.stack.imgur.com/l60Hf.png",
    take: 69.0,
    has_recruitment: true,
  },
  {
    id: 2,
    name: "쿼터랩주식회사",
    logo_url: "https://i.stack.imgur.com/l60Hf.png",
    take: 69.0,
    has_recruitment: true,
  },
  {
    id: 3,
    logo_url: "https://i.stack.imgur.com/l60Hf.png",
    name: "쿼터랩주식회사",
    take: 69.0,
    has_recruitment: false,
  },
  {
    id: 4,
    name: "test",
    logo_url: "https://i.stack.imgur.com/l60Hf.png",
    take: 0,
    has_recruitment: false,
  },
];

let recruitments_the_me = [
  {
    company_name: "(주)비바리퍼블리카",
    company_profile_url:
      "https://jobis-file.s3.ap-northeast-2.amazonaws.com/LOGO_IMAGE/afe069fb-20a7-4415-9e37-f57ff2bac9de.png",
    train_pay: 100,
    job_code_list: "서버 개발자, IOS",
    bookmarked: false,
  },
  {
    company_name: "(주)비바리퍼블리카",
    company_profile_url:
      "https://jobis-file.s3.ap-northeast-2.amazonaws.com/LOGO_IMAGE/afe069fb-20a7-4415-9e37-f57ff2bac9de.png",
    train_pay: 100,
    job_code_list: "서버 개발자, IOS",
    bookmarked: false,
  },
  {
    company_name: "(주)비바리퍼블리카",
    company_profile_url:
      "https://jobis-file.s3.ap-northeast-2.amazonaws.com/LOGO_IMAGE/afe069fb-20a7-4415-9e37-f57ff2bac9de.png",
    train_pay: 100,
    job_code_list: "서버 개발자, IOS",
    bookmarked: false,
  },
  {
    company_name: "(주)비바리퍼블리카",
    company_profile_url:
      "https://jobis-file.s3.ap-northeast-2.amazonaws.com/LOGO_IMAGE/afe069fb-20a7-4415-9e37-f57ff2bac9de.png",
    train_pay: 100,
    job_code_list: "서버 개발자, IOS",
    bookmarked: true,
  },
];

//================================================================================

interface PropsType {
  listType: "Company" | "Recruitments" | "BookMark";
}

function CardList({ listType }: PropsType) {
  switch (listType) {
    case "Company":
      //api
      break;
    case "Recruitments":
      //api
      break;
    case "BookMark":
      //api
      break;
  }
  return (
    <>
      {listType === "Company" ? (
        <CompanyCard company_list={company_the_me} />
      ) : (
        <RecruitmentsCard recruitments_list={recruitments_the_me} />
      )}
    </>
  );
}

export default React.memo(CardList);
