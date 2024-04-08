import AppliedCompaniesList from "@/components/mypage/AppliedCompaniesList";
import DetailProfile from "@/components/mypage/DetailProfile";
import CompaniesForReviewing from "@/components/mypage/CompaniesForReviewing";

export default function MyPage() {
  return (
    <div className="py-[56px] mx-[9vw]">
      <DetailProfile />
      <CompaniesForReviewing />
      <AppliedCompaniesList />
    </div>
  );
}
