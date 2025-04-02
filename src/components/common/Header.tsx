"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "@public/Logo.png";
import { Icon } from "@team-return/design-system";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMyProfile } from "@/apis/students";

function Header() {
  const pathname = usePathname();
  const { data: profile } = useMyProfile();

  return (
    <div
      className={`w-screen h-[68px] bg-white flex justify-between shadow-[0_2px_4px_0_rgba(229,229,229,0.2)] items-center fixed top-0 left-0 py-[12px] md:px-[17.5vw] sm:px-[7.5vw] z-[4]`}
    >
      <Link href={"/"} prefetch>
        <Image width={80} height={22} src={Logo} alt="joibs_logo" />
      </Link>
      <nav className="flex itmes-center gap-[44px]">
        <Link
          className={`text-[#333333] text-b2 ${
            pathname.indexOf("/companies") !== -1 && "font-b"
          }`}
          href={"/companies?page=1"}
          prefetch
        >
          기업체
        </Link>
        <Link
          className={`text-[#333333] text-b2 ${
            pathname.indexOf("/recruitments") !== -1 && "font-b"
          }`}
          href={"/recruitments?page=1"}
        >
          모집의뢰서
        </Link>
        {/* <Link
          className={`text-[#333333] text-b2 ${
            pathname.indexOf("/notice") !== -1 && "font-b"
          }`}
          href={"/notice"}
        >
          공지사항
        </Link> */}
        <Link
          className={`text-[#333333] text-b2 ${
            pathname.indexOf("/mypage") !== -1 && "font-b"
          }`}
          href={"/mypage"}
        >
          마이페이지
        </Link>
      </nav>
      <div
        className="flex items-center gap-[5px]"
        onClick={() => {
          //알림모달
        }}
      >
        <Link
          href={"/mypage"}
          className="h-[32px] bg-white flex gap-[10px] items-center"
        >
          <Image
            className="rounded-full bg-[#D9D9D9] w-7 h-7"
            width={28}
            height={28}
            src={`${
              profile?.profile_image_url &&
              process.env.NEXT_PUBLIC_IMAGE_URL +
                "/" +
                profile?.profile_image_url
            }`}
            alt="프로필사진"
          />
          <p className="text-[#333333] text-b2 font-r">
            {profile?.student_name}
          </p>
        </Link>
        <div>{/* <Icon icon={"Chevron"} size={16} color="gray90" /> */}</div>
      </div>
    </div>
  );
}

export default React.memo(Header);
