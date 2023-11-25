"use client";

import { MyProfile } from "@/apis/students";
import { departmentEnum } from "@/util/object/enum";
import { KebabItemType } from "@/util/type/kebabMenu";
import { useToastStore } from "@team-return/design-system";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Cookies } from "react-cookie";
import KebabMenu from "../common/Dropdown/KebabMenu";
import GhostTag from "./GhostTag";

export default function DetailProfile() {
  const { append } = useToastStore();
  const navigator = useRouter();
  const cookies = new Cookies();

  const { data: profile } = MyProfile();

  const kebabItems: KebabItemType[] = [
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
      label: "비밀변호 변경",
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
        navigator.push("/account/login");
        cookies.remove("access_token");
        cookies.remove("refresh_token");
      },
    },
  ];

  return (
    <div className="flex items-center gap-6">
      <div className="w-[100px] h-[100px] rounded-[50%] shadow-elevaiton overflow-hidden flex items-center justify-center">
        <Image
          width={100}
          height={100}
          src={
            profile
              ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${profile.profile_image_url}`
              : ""
          }
          alt="프로필 사진"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-h5 leading-h5 font-m">{profile?.student_name}</p>
          <GhostTag>{profile?.student_gcn}</GhostTag>
        </div>
        <p className="text-b3 leading-b3 font-r text-[#7F7F7F]">
          {profile && departmentEnum[profile.department]}
        </p>
      </div>
      <KebabMenu items={kebabItems} />
    </div>
  );
}
