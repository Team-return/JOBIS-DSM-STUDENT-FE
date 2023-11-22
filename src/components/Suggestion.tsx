import CompanyCard from "./CompanyCard";
import RecruitmentsCard from "./recruitments/RecruitmentsCard";
import SuggestionHeader from "./SuggestionHeader";

interface PropsType {
  listType: "Company" | "Recruitments" | "BookMark";
}

export default function Suggestion({ listType }: PropsType) {
  return (
    <div className="flex flex-col items-start w-full">
      <SuggestionHeader listType={listType} />
      {listType === "Company" && <CompanyCard />}
      {listType === "Recruitments" && <RecruitmentsCard />}
    </div>
  );
}
