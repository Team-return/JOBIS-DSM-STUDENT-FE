import AppliedCompaniesList from "@/components/mypage/AppliedCompaniesList";
import DetailProfile from "@/components/mypage/DetailProfile";

export default function MyPage() {
  return (
    <div className="py-[56px] mx-[9vw]">
      <DetailProfile />
      <AppliedCompaniesList />
    </div>
  );
}
