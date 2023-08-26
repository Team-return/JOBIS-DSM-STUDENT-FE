import styled from "@emotion/styled";
import CompanyCard from "./CompanyCard";
import RecruitmentsCard from "./RecruitmentsCard";

//================================================================================

let company_the_me = [
  {
    company_profile_url: "https://i.stack.imgur.com/l60Hf.png",
    company_name: "쿼터랩주식회사",
    take: 69.0,
  },
  {
    company_profile_url: "https://i.stack.imgur.com/l60Hf.png",
    company_name: "쿼터랩주식회사",
    take: 69.0,
  },
  {
    company_profile_url: "https://i.stack.imgur.com/l60Hf.png",
    company_name: "쿼터랩주식회사",
    take: 69.0,
  },
];

let recruitments_the_me = [
  {
    company_name: "(주)비바리퍼블리카",
    company_profile_url:
      "https://jobis-file.s3.ap-northeast-2.amazonaws.com/LOGO_IMAGE/afe069fb-20a7-4415-9e37-f57ff2bac9de.png",
    train_pay: 100000,
    job_code_list: "서버 개발자, IOS",
    bookmarked: false,
  },
  {
    company_name: "(주)비바리퍼블리카",
    company_profile_url:
      "https://jobis-file.s3.ap-northeast-2.amazonaws.com/LOGO_IMAGE/afe069fb-20a7-4415-9e37-f57ff2bac9de.png",
    train_pay: 100000,
    job_code_list: "서버 개발자, IOS",
    bookmarked: false,
  },
  {
    company_name: "(주)비바리퍼블리카",
    company_profile_url:
      "https://jobis-file.s3.ap-northeast-2.amazonaws.com/LOGO_IMAGE/afe069fb-20a7-4415-9e37-f57ff2bac9de.png",
    train_pay: 100000,
    job_code_list: "서버 개발자, IOS",
    bookmarked: false,
  },
  {
    company_name: "(주)비바리퍼블리카",
    company_profile_url:
      "https://jobis-file.s3.ap-northeast-2.amazonaws.com/LOGO_IMAGE/afe069fb-20a7-4415-9e37-f57ff2bac9de.png",
    train_pay: 100000,
    job_code_list: "서버 개발자, IOS",
    bookmarked: false,
  },
];

//================================================================================

interface PropsType {
  listType: "Company" | "Recruitments" | "BookMark";
}

export default function CardList({ listType }: PropsType) {
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
