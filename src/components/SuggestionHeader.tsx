"use client";

import { Icon } from "@team-return/design-system";
import { useMyProfile } from "@/apis/students";
import Link from "next/link";

interface PropsType {
  listType: "Company" | "Recruitments" | "Bookmark";
}

export default function SuggestionHeader({ listType }: PropsType) {
  const { data: profile } = useMyProfile();

  const suggestionHeaderDummy = {
    Company: {
      title: "🏢 이런 기업은 어떠세요?",
      router: "/companies",
    },
    Recruitments: {
      title: `👩‍💻 ${profile?.student_name || "사용자"}님의 관심 분야에요`,

      router: "/recruitments",
    },
    Bookmark: {
      title: "📌 내가 저장한 모집의뢰서",
    },
  };
  return (
    <header className="flex mb-[12px]">
      <div className="flex gap-[10px] items-center text-h5 leading-h5 font-b">
        <p>{suggestionHeaderDummy[listType].title}</p>
      </div>
      {listType !== "Bookmark" && (
        <Link
          href={suggestionHeaderDummy[listType].router}
          className="w-[120px] h-[32px] flex items-end justify-center text-b3 leading-b3 text-[#7f7f7f] font-m bg-none border-none cursor-pointer"
        >
          전체보기
          <Icon icon="Chevron" direction="right" size={18} color="gray60" />
        </Link>
      )}
    </header>
  );
}
