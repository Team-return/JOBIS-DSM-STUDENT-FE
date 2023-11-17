<<<<<<< HEAD
import BookmarkCard from "./BookmarkCard";
import CompanyCard from "./CompanyCard";
import RecruitmentsCard from "./RecruitmentsCard";
=======

import CompanyCard from "./company/CompanyCard";
import RecruitmentsCard from "./recruitments/RecruitmentsCard";
>>>>>>> develop
import SuggestionHeader from "./SuggestionHeader";

interface PropsType {
  listType: "Company" | "Recruitments" | "Bookmark";
}

export default function Suggestion({ listType }: PropsType) {
  return (
    <div className="flex flex-col items-start w-full">
      <SuggestionHeader listType={listType} />
      {listType === "Company" && <CompanyCard />}
      {listType === "Recruitments" && <RecruitmentsCard />}
      {listType === 'Bookmark' && <BookmarkCard />}
    </div>
  );
}
