"use client";

import { GetCode } from "@/apis/code";
import useForm from "@/hook/useForm";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DropDown from "../common/DropDown";
import SearchDropDown from "../common/SearchDropDown";
import TextFiled from "../common/TextFiled";

function Filter() {
  const getParams = useSearchParams();
  const navigator = useRouter();
  const pathname = usePathname();
  const [filter, setFilter] = useState({
    page: Number(getParams.get("page")),
    job_code: getParams.get("job_code"),
    tech_code: getParams.get("tech_code"),
  });
  const { state: searchState, onChange: onChangeSearch } = useForm<{
    search: string | undefined;
  }>({
    search: getParams.get("name")?.toString(),
  });

  const onSearch = () => {
    navigator.push(
      `${pathname}?page=${filter.page}&job_code=${filter.job_code}&tech_code=${filter.tech_code}&name=${searchState.search}`
    );
  };

  useEffect(onSearch, [filter]);

  const onItemClick = (
    item: string | number,
    name: "job_code" | "tech_code"
  ) => {
    if (filter[name] === item) {
      setFilter((prev) => ({ ...prev, [name]: "" }));
    } else setFilter((prev) => ({ ...prev, [name]: item }));
  };

  const { data } = GetCode("JOB");

  return (
    <div className="flex gap-4">
      <DropDown
        title="분야"
        items={data?.data.codes}
        onItemClick={onItemClick}
        selected={getParams.get("job_code")?.toString() || ""}
      />
      <SearchDropDown title="기술스택" />
      <TextFiled
        placeholder="검색어를 입력해주세요."
        value={searchState.search}
        onChange={onChangeSearch}
        name="search"
        customType="Search"
        iconClick={onSearch}
        width="26vw"
      />
    </div>
  );
}

export default Filter;
