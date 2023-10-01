'use client'

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CircleBtn from "./CircleBtn";

//=======================================================================================================
import TeatBannerImg from "@public/test-banner-1.png";
const test = [
  {
    img: TeatBannerImg,
    url: "https://www.naver.com",
  },
  {
    img: TeatBannerImg,
    url: "https://www.naver.com",
  },
  {
    img: TeatBannerImg,
    url: "https://www.naver.com",
  },
  {
    img: TeatBannerImg,
    url: "https://www.naver.com",
  },
  {
    img: TeatBannerImg,
    url: "https://www.naver.com",
  },
];
//=======================================================================================================

export default function Banner() {
  const [selected, setSelected] = useState<number>(0);
  const BannerRefs = useRef<HTMLDivElement[] | null[]>([]);

  const handleChangeNext = () => {
    setSelected((prev) => {
      if (test.length - 1 === prev) {
        return 0;
      }
      return ++prev;
    });
  };
  const handleChangePrev = () => {
    setSelected((prev) => {
      if (prev === 0) {
        return test.length - 1;
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
      <div className="w-screen flex gap-[50px] relative overflow-hidden whitespace-nowrap z-1 ">
        {test.map((item, index) => (
          <div
            className={`w-[65vw] h-[20vw] inline-block flex-[0_0_auto] relative rounded-[12px] border border-[#E5E5E5] border-solid overflow-hidden curosr-pointer ${
              index === 0 && "m-[0_0_0_17.5vw]"
            } ${index === test.length - 1 && "m-[0_17.5vw_0_0]"}`}
            ref={(el: HTMLDivElement) => (BannerRefs.current[index] = el)}
            onClick={() => {
              window.open(item.url);
            }}
          >
            <Image
              className="object-cover"
              fill
              src={item.img}
              alt=""
            />
          </div>
        ))}
      </div>

      <div className="flex gap-[7px] relative bottom-[40px] z-3">
        {test.map((_, index: number) => (
          <div
            className={`w-[8px] h-[8px] rounded-full cursor-pointer ${
              index === selected ? "bg-white" : "bg-white/[.4]"
            }`}
            key={index}
            onClick={() => {
              setSelected(index);
            }}
          />
        ))}
      </div>
      <div className="w-screen h-[20vw] flex justify-between bg-none items-center absolute px-[8vw]">
        <CircleBtn direction="left" onClick={handleChangePrev} />
        <CircleBtn direction="right" onClick={handleChangeNext} />
      </div>
    </div>
  );
}
