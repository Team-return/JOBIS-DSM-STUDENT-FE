import { Icon } from "@team-return/design-system";
import CardList from "./CardList";
import CompanyCard from "./CompanyCard";
import RecruitmentsCard from "./RecruitmentsCard";

interface PropsType {
  listType: "Company" | "Recruitments" | "BookMark";
}

const fix_data = {
  Company: {
    title: "🏢 이런 기업은 어떠세요?",
    router: "/company",
  },
  Recruitments: {
    title: `👩‍💻 ${"강용수"}의 관심 분야에요`,
    router: "/recruitements",
  },
  BookMark: {
    title: "📌 내가 저장한 모집의뢰서",
  },
};

// icon={fix_data[listType].emoji}
export default function Suggestion({ listType }: PropsType) {
  return (
    <div className="flex flex-col items-start w-full">
      <header className="flex mb-[12px]">
        <div className="flex gap-[10px] items-center text-h5 leading-h5 font-b">
          <p>{fix_data[listType].title}</p>
        </div>
        <button className="w-[120px] h-[32px] flex items-end justify-center text-b3 leading-b3 text-[#7f7f7f] font-m bg-none border-none cursor-pointer">
          전체보기
          {/* <Icon icon="Chevron" direction="right" size={18} color="gray60" /> */}
        </button>
      </header>
      {listType === "Company" && <CompanyCard />}
      {listType === "Recruitments" && <RecruitmentsCard />}
    </div>
  );
}
