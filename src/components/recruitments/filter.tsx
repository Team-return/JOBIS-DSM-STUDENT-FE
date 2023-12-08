"use client";

import { useGetCode } from "@/apis/code";
import useForm from "@/hook/useForm";
import { RecruitmentsQueryType } from "@/hook/useQueryString/type";
import { useQueryString } from "@/hook/useQueryString/useQueryString";
import { internDropdownItems } from "@/util/object/jobCodeDorpdownItems";
import { useEffect, useState } from "react";
import DropDown from "../common/DropDown";
import SearchDropDown from "../common/SearchDropDown";
import TextFiled from "../common/TextFiled";

function Filter() {
  const { setQueryString, getQueryString } =
    useQueryString<RecruitmentsQueryType>({
      page: "1",
      job_code: "",
      tech_code: "",
      name: "",
      winter_intern: "",
    });

  const [filter, setFilter] = useState({
    page: getQueryString("page"),
    job_code: getQueryString("job_code"),
    tech_code: getQueryString("tech_code"),
    winter_intern: getQueryString("winter_intern"),
  });
  const { state: searchState, onChange: onChangeSearch } = useForm<{
    search: string | undefined;
  }>({
    search: getQueryString("name"),
  });

  const onSearch = () => {
    setQueryString({
      ...filter,
      page: "1",
      name: searchState.search,
    });
  };

  useEffect(onSearch, [filter]);

  const onItemClick = (
    jobType: "job_code" | "winter_intern",
    itemCode: string
  ) => {
    if (filter[jobType] === itemCode) {
      setFilter((prev) => ({ ...prev, [jobType]: "" }));
    } else setFilter((prev) => ({ ...prev, [jobType]: itemCode }));
  };

  const { data: codes } = useGetCode("JOB");

  const jobCodeDropdownItems = codes?.codes.map((item) => ({
    code: item.code.toString(),
    label: item.keyword,
  }));

  return (
    <div className="flex justify-end gap-4">
      <DropDown
        title="모집구분"
        items={internDropdownItems}
        onClickItem={(itemCode: string) => {
          onItemClick("winter_intern", itemCode);
        }}
        selected={getQueryString("winter_intern") || ""}
      />
      <DropDown
        title="분야"
        items={jobCodeDropdownItems ?? [{ code: "1", label: "" }]}
        onClickItem={(itemCode: string) => {
          onItemClick("job_code", itemCode);
        }}
        selected={getQueryString("job_code") || ""}
      />
      <SearchDropDown title="기술스택" />
      <TextFiled
        placeholder="검색어를 입력해주세요."
        value={searchState.search}
        onChange={onChangeSearch}
        name="search"
        customType="Search"
        enterEvent={onSearch}
        className="md:20vw sm:22vw"
      />
    </div>
  );
}

export default Filter;
