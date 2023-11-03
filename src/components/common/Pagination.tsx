"use client";

import { GetNumberOfCompaniesListPages } from "@/apis/companies";
import { GetNumberOfRecruitmentRequestListPages } from "@/apis/recruitments";
import { useQueryString } from "@/hook/useQueryString";
import { Icon, theme } from "@team-return/design-system";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Pagination() {
  const pathname = usePathname();

  const { setQueryString, getValue, getEntry } = useQueryString({
    page: "1",
    job_code: "",
    tech_code: "",
    name: "",
  });
  const currentPageNumber = getValue("page");

  const numberOfPages =
    pathname === "/recruitments/"
      ? GetNumberOfRecruitmentRequestListPages(
          `${getEntry("job_code")}&${getEntry("tech_code")}&${getEntry("name")}`
        )?.data
      : GetNumberOfCompaniesListPages(`${getEntry("name")}`)?.data;
  const [pagesArray, setPagesArray] = useState<number[]>([]);

  useEffect(() => {
    setPagesArray(new Array(numberOfPages?.total_page_count).fill(0));
  }, [numberOfPages]);

  return (
    <div className="flex items-center justify-center text-[13px] font-b mt-10">
      <div
        className="flex items-center justify-center w-8 h-8 cursor-pointer"
        onClick={() => {
          if (getValue("page") !== "1")
            setQueryString({ page: "" + (Number(getValue("page")) - 1) });
        }}
      >
        <Icon
          icon="Chevron"
          direction="left"
          size={16}
          color={getValue("page") === "1" ? "gray50" : "gray90"}
        />
      </div>
      {pagesArray?.map((_, idx) => (
        <div
          key={idx}
          className="flex items-center justify-center w-8 h-8 cursor-pointer"
          style={
            currentPageNumber == idx + 1 + ""
              ? { color: `${theme.color.gray90}` }
              : { color: `${theme.color.gray60}` }
          }
          onClick={() => {
            setQueryString({ page: String(idx + 1) });
          }}
        >
          {idx + 1}
        </div>
      ))}
      <div
        className="flex items-center justify-center w-8 h-8 cursor-pointer"
        onClick={() => {
          if (getValue("page") !== pagesArray.length.toString())
            setQueryString({ page: "" + (Number(getValue("page")) + 1) });
        }}
      >
        <Icon
          icon="Chevron"
          direction="right"
          size={16}
          color={getValue("page") === String(pagesArray.length) ? "gray50" : "gray90"}
        />
      </div>
    </div>
  );
}
