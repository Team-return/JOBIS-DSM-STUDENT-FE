import { useToastStore } from "@team-return/design-system";
import { useRouter } from "next/navigation";
import { Cookies } from "react-cookie";
import { KebabItemType } from "../type/kebabMenu";

export const getMypageKebabItems = (): KebabItemType[] => {
  const { append } = useToastStore();
  const navigator = useRouter();
  const cookies = new Cookies();
  return [
    {
      label: "프로필 수정",
      onClick: () => {
        append({
          title: "",
          message: "개발 중인 기능입니다.",
          type: "YELLOW",
        });
      },
    },
    {
      label: "비밀번호 변경",
      onClick: () => {
        append({
          title: "",
          message: "개발 중인 기능입니다.",
          type: "YELLOW",
        });
      },
    },
    {
      label: "버그 제보하기",
      onClick: () => {
        append({
          title: "",
          message: "개발 중인 기능입니다.",
          type: "YELLOW",
        });
      },
    },
    {
      label: "로그아웃",
      onClick: () => {
        console.log("로그아웃");
        cookies.remove("access_token", { path: "/" });
        cookies.remove("refresh_token", { path: "/" });
        navigator.push("/account/login");
      },
    },
  ];
};

export const getCompanyKebabItems = (
  onClickRecruitments?: () => void,
  onClickInterview?: () => void
): KebabItemType[] => {
  return [
    {
      label: "모집의뢰서 조회",
      onClick: () => {
        onClickRecruitments && onClickRecruitments();
      },
    },
    {
      label: "면접 후기 조회",
      onClick: () => {
        onClickInterview && onClickInterview();
      },
    },
  ];
};
