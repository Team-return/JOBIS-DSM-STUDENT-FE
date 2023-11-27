"use client";

import { useGetCode } from "@/apis/code";
import useForm from "@/hook/useForm";
import { useQueryString } from "@/hook/useQueryString";
import React, { useEffect, useState } from "react";
import DropDown from "../common/DropDown";
import SearchDropDown from "../common/SearchDropDown";
import TextFiled from "../common/TextFiled";

function Filter() {
  const { setQueryString, getQueryString } = useQueryString({
    page: "1",
    job_code: "",
    tech_code: "",
    name: "",
  });

  const [filter, setFilter] = useState({
    page: getQueryString("page"),
    job_code: getQueryString("job_code"),
    tech_code: getQueryString("tech_code"),
  });
  const { state: searchState, onChange: onChangeSearch } = useForm<{
    search: string | undefined;
  }>({
    search: getQueryString("name"),
  });

  const onSearch = () => {
    setQueryString({
      page: "1",
      job_code: filter.job_code,
      tech_code: filter.tech_code,
      name: searchState.search,
    });
  };

  useEffect(onSearch, [filter]);

  const onItemClick = (
    itemCode: string | number,
    name: "job_code" | "tech_code"
  ) => {
    if (filter[name] === itemCode) {
      setFilter((prev) => ({ ...prev, [name]: "" }));
    } else setFilter((prev) => ({ ...prev, [name]: itemCode }));
  };

  const { data } = useGetCode("JOB");

  return (
    <div className="flex gap-4">
      <DropDown
        title="분야"
        items={data?.data.codes}
        onItemClick={onItemClick}
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
        width="26vw"
      />
    </div>
  );
}

export default Filter;
