"use client";

import { UserProfileContext } from "@/context/UserContext";
import { departmentEnum } from "@/util/object/enum";
import { getMypageKebabItems } from "@/util/object/kebabMenuItems";
import Image from "next/image";
import { useContext } from "react";
import KebabMenu from "../common/Dropdown/KebabMenu";
import GhostTag from "./GhostTag";

export default function DetailProfile() {
  const { userProfile } = useContext(UserProfileContext);
  return (
    <div className="flex items-center gap-6">
      <div className="w-[100px] h-[100px] rounded-[50%] shadow-elevaiton overflow-hidden flex items-center justify-center">
        <Image
          width={100}
          height={100}
          src={
            userProfile.profile_image_url
              ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${userProfile.profile_image_url}`
              : ""
          }
          alt="프로필 사진"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-h5 leading-h5 font-m">{userProfile.student_name}</p>
          <GhostTag>{userProfile.student_gcn}</GhostTag>
        </div>
        <p className="text-b3 leading-b3 font-r text-[#7F7F7F]">
          {departmentEnum[userProfile.department]}
        </p>
      </div>
      <KebabMenu items={getMypageKebabItems()} />
    </div>
  );
}
