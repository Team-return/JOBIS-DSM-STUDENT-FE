"use client";

import { Icon, useToastStore } from "@team-return/design-system";
import Image from "next/image";
import BannerBackground from "@public/BannerBackground.png";
import Guy from "@public/Guy.webp";
import Link from "next/link";

export default function BandBanner() {
  const { append } = useToastStore();
  return (
    <Link
      className="w-full h-[120px] py-7 px-[100px] mt-15 cursor-pointer relative"
      href={"/"}
      onClick={() => {
        append({
          title: "",
          message: "개발 중인 기능입니다.",
          type: "YELLOW",
        });
      }}
    >
      <div className="flex flex-col w-full h-full">
        <p className="text-white text-h6 leading-h6 font-b">
          우리학교 학생들은 얼마나 취업했을까?
        </p>
        <div className="flex items-center text-caption leading-caption font-m text-white w-[117px] py-1 px-[10px] bg-white/[.2] mt-3 rounded-full">
          <p>취업률 보러가기</p>
          <Icon icon="Chevron" direction="right" color="gray10" size={16} />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full rounded-[20px] z-[-1] overflow-hidden">
        <div className="relative">
          <Image
            className="object-cover"
            width={0}
            height={0}
            src={BannerBackground}
            alt="배경이미지"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-[100px] w-[121px] h-[143px] mr-[50px] md:block">
        <div className="relative w-full h-full">
          <Image fill src={Guy} alt="사람" />
        </div>
      </div>
    </Link>
  );
}
