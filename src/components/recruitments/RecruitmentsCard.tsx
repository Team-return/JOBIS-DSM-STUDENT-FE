"use client";

import { useSetBookmarks } from "@/apis/bookmarks";
import { useGetRecruitmentsList } from "@/apis/recruitments";
import { RecruitmentsListType } from "@/apis/recruitments/type";
import { money_regex } from "@/util/regex";
import { Icon } from "@team-return/design-system";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import HoverPrefetchLink from "../common/HoverPrefetchLink";
import RecruitmentSkelton from "../common/Skelton/SkeltonElement";

interface PropsType {
  maxLength?: number;
}

export default function RecruitmentsCard({ maxLength = 12 }: PropsType) {
  const getParams = useSearchParams();

  const { data: recruitmentsList, isLoading } = useGetRecruitmentsList(
    getParams.toString()
  );

  return (
    <div className="w-full mt-5 grid grid-cols-3 md:grid-cols-4 gap-[1.5vw]">
      {isLoading && <RecruitmentSkelton />}
      {recruitmentsList?.recruitments.length === 0 ? (
        <p className="col-span-4 text-center">⚠ 아직 모집의뢰서가 없습니다.</p>
      ) : (
        recruitmentsList?.recruitments
          .filter((_, idx) => idx < maxLength)
          .map((item) => {
            return <RecruitmentsItem key={item.id} {...item} />;
          })
      )}
    </div>
  );
}

function RecruitmentsItem({
  company_profile_url,
  company_name,
  hiring_jobs,
  bookmarked,
  id,
  military_support,
}: RecruitmentsListType) {
  const { mutate: SetBookmarksMutate } = useSetBookmarks();
  const [localBookmarked, setLocalBookmarked] = useState<boolean>(
    bookmarked || false
  );

  return (
    <HoverPrefetchLink href={`/recruitments/detail?id=${id}`}>
      <div className="flex flex-col w-full overflow-hidden transition duration-200 cursor-pointer shadow-elevaiton rounded-xl hover:transition hover:scale-105 h-full">
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
            {hiring_jobs}
          </p>
          <p className="text-b3 leading-b3 font-r text-[#444444] mt-1">
            {company_name}
          </p>
          <div className="flex content-end mt-[10px] flex-wrap w-full overflow-x-scroll whitespace-nowrap gap-1 flex-1">
            {military_support && <div className="tagStyle">병역특례</div>}
          </div>
          <button
            className="w-6 h-6 absolute top-[14px] right-[14px] flex items-center justify-center bg-none border-none cursor-pointer"
            aria-label="bookMarkBtn"
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              event.preventDefault();
              setLocalBookmarked((prev) => !prev);
              SetBookmarksMutate(id);
            }}
          >
            <Icon
              icon={`Bookmark${localBookmarked ? "On" : "Off"}`}
              color={localBookmarked ? "skyblue" : "gray60"}
            />
          </button>
        </div>
      </div>
    </HoverPrefetchLink>
  );
}
