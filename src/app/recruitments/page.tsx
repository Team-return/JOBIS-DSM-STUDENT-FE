import Pagination from "@/components/common/Pagination";
import Filter from "@/components/recruitments/filter";
import RecruitmentsCard from "@/components/recruitments/RecruitmentsCard";

export default function Recruitments() {
  return (
    <div className="w-full my-[68px]">
      <div className="flex items-center justify-between w-full py-5">
        <div className="flex gap-[10px] items-center text-h5 leading-h5 font-b">
          <p>📄 모집의뢰서</p>
        </div>
        <Filter />
      </div>
      <RecruitmentsCard />
      <Pagination />
    </div>
  );
}
