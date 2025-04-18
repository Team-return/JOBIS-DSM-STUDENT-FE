import { BannerStatusType } from "@/apis/banners/type";

export const hiringProgressEnum = {
  CULTURE_INTERVIEW: "컬쳐면접",
  DOCUMENT: "서류전형",
  TASK: "과제제출",
  LIVE_CODING: "라이브코딩",
  TECH_INTERVIEW: "기술면접",
  FINAL_INTERVIEW: "최종면접",
  PERSONALITY: "인적성 테스트",
  AI: "AI면접",
  CODING_TEST: "코딩테스트",
};

export const departmentEnum = {
  SOFTWARE_DEVELOP: "소프트웨어개발과",
  EMBEDDED_SOFTWARE: "임베디드소프트웨어과",
  INFORMATION_SECURITY: "정보보안과",
  AI_SOFTWARE: "인공지능스프트웨어과",
  COMMON: "공통교육과정",
};

export const applicationEnum = {
  REQUESTED: "승인요청",
  APPROVED: "승인됨",
  SEND: "지원 중",
  FAILED: "불합격",
  PASS: "합격",
  REJECTED: "반려",
  FIELD_TRAIN: "현장실습",
  ACCEPTANCE: "근로계약",
};

export const applicationStatusStyle = {
  REQUESTED: { color: "#F1C40F", backgroundColor: "#FDF7E2" },
  APPROVED: { color: "#F1C40F", backgroundColor: "#FDF7E2" },
  SEND: { color: "#237BC9", backgroundColor: "#E0EBF6" },
  FAILED: { color: "#E74C3C", backgroundColor: "#FCE9E7" },
  PASS: { color: "#2ECC71", backgroundColor: "#E5F8EE" },
  REJECTED: { color: "#E74C3C", backgroundColor: "#FCE9E7" },
  FIELD_TRAIN: { color: "#2ECC71", backgroundColor: "#E5F8EE" },
  ACCEPTANCE: { color: "#2ECC71", backgroundColor: "#E5F8EE" },
};

export const bannerTypeEnum: Record<BannerStatusType, string> = {
  RECRUITMENT: "/recruitments/?page=1",
  BOOKMARK: "/",
  NONE: "/",
  INTERNSHIP: "/recruitments/?page=1&winter_intern=true",
  COMPANY: "/companies/detail/",
  EMPLOYMENT: "/job-rate",
};
