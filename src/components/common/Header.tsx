"use client";

import { useMyProfile } from "@/apis/students";
import { UserProfileContext } from "@/context/UserContext";
import Logo from "@public/Logo.png";
import { access } from "fs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";

function Header() {
  const pathname = usePathname();
  const { userProfile, setUserProfile } = useContext(UserProfileContext);
  const [cookies] = useCookies();
  useEffect(() => {
    if (
      pathname.toString().indexOf("/apply") !== -1 ||
      pathname.toString().indexOf("/account") !== -1
    ) {
      document.querySelector("body")!.style.backgroundColor = "#fafafa";
    } else {
      document.querySelector("body")!.style.backgroundColor = "#ffffff";
    }
  }, [pathname]);
  
  useEffect(() => {
    if(cookies.access_token){
      useMyProfile(setUserProfile);
    }
  }, [cookies.access_token]);

  if (pathname.toString().indexOf("/account") !== -1) {
    return null;
  }

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
        <div className="h-[32px] bg-white flex gap-[10px] items-center">
          <Image
            className="rounded-full bg-[#D9D9D9]"
            width={28}
            height={28}
            src={`${
              userProfile.profile_image_url &&
              process.env.NEXT_PUBLIC_IMAGE_URL +
                "/" +
                userProfile.profile_image_url
            }`}
            alt="프로필사진"
          />
          <p className="text-[#333333] text-b2 font-r">
            {userProfile.student_name}
          </p>
        </div>
        <div>{/* <Icon icon={"Chevron"} size={16} color="gray90" /> */}</div>
      </div>
    </div>
  );
}

export default React.memo(Header);
