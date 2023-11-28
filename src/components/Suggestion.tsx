import { useEffect } from "react";
import BookmarkCard from "./BookmarkCard";
import CompanyCard from "./company/CompanyCard";
import RecruitmentsCard from "./recruitments/RecruitmentsCard";
import SuggestionHeader from "./SuggestionHeader";

interface PropsType {
  listType: "Company" | "Recruitments" | "Bookmark";
}

export default function Suggestion({ listType }: PropsType) {
  function windowResize() {
    console.log("resize");
  }
  useEffect(() => {
    document.addEventListener(`resize`, windowResize);

    return () => {
      document.removeEventListener(`resize`, windowResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-start w-full">
      <SuggestionHeader listType={listType} />
      {listType === "Company" && <CompanyCard maxLength={3} />}
      {listType === "Recruitments" && <RecruitmentsCard maxLength={4} />}
      {listType === "Bookmark" && <BookmarkCard />}
    </div>
  );
}
