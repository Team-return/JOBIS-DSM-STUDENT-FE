"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CircleBtn from "./CircleBtn";
import { useRouter } from "next/navigation";
import { useGetBanners } from "../apis/banners";
import { bannerTypeEnum } from "../util/object/enum";

export default function Banner() {
  const { data: banners } = useGetBanners();
  const [selected, setSelected] = useState<number>(0);
  const BannerRefs = useRef<HTMLDivElement[] | null[]>([]);
  const navigator = useRouter();

  const handleChangeNext = () => {
    setSelected((prev) => {
      if (banners && prev === banners.banners.length - 1) {
        return 0;
      }
      return ++prev;
    });
  };
  const handleChangePrev = () => {
    setSelected((prev) => {
      if (banners && prev === banners.banners.length - 1) {
        return 0;
      }
      return --prev;
    });
  };

  useEffect(() => {
    BannerRefs.current[selected]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [selected]);

  return (
    <div className="flex flex-col items-center gap-[15px]">
      <div className="w-screen flex gap-[50px] relative overflow-hidden whitespace-nowrap">
        {banners &&
          banners.banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`cursor-pointer z-[1] md:w-[65vw] sm:w-[85vw] md:h-[20vw] sm:h-[27vw] inline-block flex-[0_0_auto] relative rounded-[14px] border border-[#E5E5E5] border-solid overflow-hidden curosr-pointer ${
                index === 0 && "md:ml-[17.5vw] sm:ml-[7.5vw]"
              } ${
                index === banners.banners.length - 1 &&
                "md:mr-[17.5vw] sm:mr-[7.5vw]"
              }`}
              ref={(el: HTMLDivElement) => (BannerRefs.current[index] = el)}
              onClick={() => {
                navigator.push(
                  bannerTypeEnum[
                    banner.banner_type as keyof typeof bannerTypeEnum
                  ]
                );
              }}
            >
              <Image
                className="object-cover"
                fill
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${banner.banner_url}`}
                alt=""
              />
            </div>
          ))}
      </div>

      <div className="flex relative bottom-[50px] z-[3]">
        {banners &&
          banners.banners.map((_, index: number) => (
            <div
              className="w-[20px] h-[20px] flex justify-center items-center cursor-pointer"
              key={index}
              onClick={() => {
                setSelected(index);
              }}
            >
              <div
                className={`w-[8px] h-[8px] rounded-full ${
                  index === selected ? "bg-white" : "bg-white/[.4]"
                }`}
              />
            </div>
          ))}
      </div>
      <div className="w-screen md:h-[20vw] sm:h-[27vw] flex justify-between bg-none items-center absolute px-[8vw]">
        <CircleBtn direction="left" onClick={handleChangePrev} />
        <CircleBtn direction="right" onClick={handleChangeNext} />
      </div>
    </div>
  );
}
