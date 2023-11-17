"use client";

import { Icon } from "@team-return/design-system";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { RecruitmentsListType } from "@/apis/recruitments/type";
import { GetRecruitmentsList } from "@/apis/recruitments";
import HoverPrefetchLink from "../common/HoverPrefetchLink";
import RecruitmentSkelton from "../common/Skelton/SkeltonElement";

export default function RecruitmentsCard() {
  const getParams = useSearchParams();
  const [list, setList] = useState<RecruitmentsListType[]>([]);

  const {data:recruitmentsList, isLoading} = GetRecruitmentsList(getParams.toString());
  useEffect(() => {
    setList((prev) => recruitmentsList?.data.recruitments || prev);
  }, [recruitmentsList]);

  const tagStyle =
    "text-caption leading-caption text-lightBlue font-r border rounded-full border-[#135C9D] py-1 px-2";

  return (
    <div className="w-full mt-5 grid grid-cols-3 md:grid-cols-4 gap-[1.5vw]">
      {isLoading && <RecruitmentSkelton />}
      {list.map(
        (
          {
            company_profile_url,
            company_name,
            train_pay,
            job_code_list,
            bookmarked,
            recruit_id,
            military,
          },
          index
        ) => (
          <HoverPrefetchLink
            href={`/recruitments/detail?id=${recruit_id}`}
            key={index}
          >
            <div className="flex flex-col w-full overflow-hidden transition duration-200 cursor-pointer shadow-elevaiton rounded-xl hover:transition hover:scale-105">
              <div className="w-full h-0 pb-[70%] relative">
                <Image
                  className="absolute object-contain"
                  fill
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${company_profile_url}`}
                  alt=""
                />
              </div>
              <div className="relative bg-[#fafafa] p-[14px] flex-1 flex flex-col">
                <p className="mr-8 text-black text-b2 leading-b2 font-b">
                  {job_code_list}
                </p>
                <p className="text-b3 leading-b3 font-r text-[#444444] mt-1">
                  {company_name}
                </p>
                <div className="flex content-end mt-[10px] flex-wrap w-full overflow-x-scroll whitespace-nowrap gap-1 flex-1">
                  <div className={tagStyle}>실습수당 {train_pay}만원</div>
                  {military && <div className={tagStyle}>병역특례</div>}
                </div>
                <button
                  className="w-6 h-6 absolute top-[14px] right-[14px] flex items-center justify-center bg-none border-none cursor-pointer"
                  aria-label="bookMarkBtn"
                  onClick={(event: React.MouseEvent<HTMLElement>) => {
                    event.stopPropagation();
                  }}
                >
                  <Icon
                    icon={`Bookmark${bookmarked ? "On" : "Off"}`}
                    color={bookmarked ? "skyblue" : "gray60"}
                  />
                </button>
              </div>
            </div>
          </HoverPrefetchLink>
        )
      )}
    </div>
  );
}