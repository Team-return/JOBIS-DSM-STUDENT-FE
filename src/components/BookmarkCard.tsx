import { useGetBookmarks } from "@/apis/bookmarks";
import { Icon } from "@team-return/design-system";
import Link from "next/link";
import HoverPrefetchLink from "./common/HoverPrefetchLink";

export default function BookmarkCard() {
  const { data: bookmarks } = useGetBookmarks();

  return (
    <div className="w-full mt-5 grid grid-cols-3 md:grid-cols-4 gap-[1.5vw]">
      {!bookmarks?.bookmarks.length && (
        <div className="col-span-3 text-b3 leading-b3 font-m text-[#7f7f7f] ml-6 flex">
          <p className="mr-2">⚠ 저장한 모집의뢰서가 존재하지 않습니다.</p>
          <Link href={"/recruitments"} className="flex items-center underline">
            모집의뢰서 보러가기
            <Icon icon="Chevron" direction="right" size={16} />
          </Link>
        </div>
      )}
      {bookmarks?.bookmarks.map(({ company_name, recruitment_id }) => (
        <HoverPrefetchLink
          href={`/recruitments/detail?id=${recruitment_id}`}
          key={recruitment_id}
        >
          <div className="flex flex-col w-full overflow-hidden transition duration-200 cursor-pointer shadow-elevaiton rounded-xl hover:transition hover:scale-105">
            <div className="relative bg-[#ffffff] p-[14px] flex-1 flex flex-col">
              <p className="mr-8 overflow-hidden text-black text-b2 leading-b2 font-b whitespace-nowrap text-ellipsis">
                {company_name}
              </p>
              <button className="w-6 h-6 absolute top-[14px] right-[14px] flex items-center justify-center bg-none border-none cursor-pointer">
                <Icon icon="BookmarkOn" color="skyblue" />
              </button>
            </div>
          </div>
        </HoverPrefetchLink>
      ))}
    </div>
  );
}
