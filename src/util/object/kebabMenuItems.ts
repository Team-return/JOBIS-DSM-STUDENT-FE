import { useToastStore } from "@team-return/design-system";
import { useRouter } from "next/navigation";
import { Cookies } from "react-cookie";
import { KebabItemType } from "../type/kebabMenu";

export const mypageKebabItems: KebabItemType[] = [
  {
    label: "프로필 수정",
    onClick: () => {
      const { append } = useToastStore();
      append({
        title: "",
        message: "개발 중인 기능입니다.",
        type: "YELLOW",
      });
    },
  },
  {
    label: "비밀변호 변경",
    onClick: () => {
      const { append } = useToastStore();

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
      const { append } = useToastStore();

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
      const navigator = useRouter();
      const cookies = new Cookies();

      navigator.push("/account/login");
      cookies.remove("access_token");
      cookies.remove("refresh_token");
    },
  },
];

export const GetCompanyKebabItems = (
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
