import { GetBookmarks } from "@/apis/bookmarks";
import { RecruitmentsListType } from "@/apis/recruitments/type";
import { Icon } from "@team-return/design-system";
import Image from "next/image";
import { useEffect, useState } from "react";
import HoverPrefetchLink from "./common/HoverPrefetchLink";

//테스트
//=========================

const bookmarksList: RecruitmentsListType[] = [
  {
    recruit_id: 88,
    company_name: "주식회사두잇(Doeat)",
    company_profile_url: "LOGO_IMAGE/companydefault.png",
    train_pay: 200,
    military: true,
    total_hiring: 0,
    job_code_list:
      "서버 개발자/프론트엔드/Android/iOS/임베디드 프로그래밍/인공지능 개발",
    bookmarked: true,
  },
  {
    recruit_id: 25,
    company_name: "주식회사페이히어",
    company_profile_url:
      "LOGO_IMAGE/f9621d89-2e79-4ce6-94b0-fcac24346ddb-5.png",
    train_pay: 0,
    military: true,
    total_hiring: 0,
    job_code_list: "서버 개발자",
    bookmarked: true,
  },
];

//=========================

export default function BookmarkCard() {
  // const [bookmarksList, setBookmarksList] = useState<RecruitmentsListType[]>(
  //   []
  // );

  // const bookmarks = GetBookmarks();

  // useEffect(() => {
  //   setBookmarksList((prev) => bookmarks.recruitments || prev);
  // }, [bookmarks]);

  return (
    <div className="w-full mt-5 grid grid-cols-3 md:grid-cols-4 gap-[1.5vw]">
      {bookmarksList.map(
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
                  <div className="tagStyle">실습수당 {train_pay}만원</div>
                  {military && <div className="tagStyle">병역특례</div>}
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
