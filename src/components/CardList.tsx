import React from "react";
import CompanyCard from "./CompanyCard";
import RecruitmentsCard from "./recruitments/RecruitmentsCard";

interface PropsType {
  listType: "Company" | "Recruitments" | "BookMark";
}

function CardList({ listType }: PropsType) {
  return <>{listType === "Company" ? <CompanyCard /> : <RecruitmentsCard />}</>;
}

export default React.memo(CardList);
