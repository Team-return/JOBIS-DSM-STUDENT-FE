"use client";

import styled from "@emotion/styled";
import TextFiled from "@/components/common/TextFiled";
import useInput from "@/hook/useInput";
import CardList from "@/components/CardList";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CompanyCard from "@/components/CompanyCard";

export default function CompanyListPage() {
  const getParams = useSearchParams();
  const [page, setPage] = useState(Number(getParams.get("page")));
  const navigator = useRouter();
  const pathname = usePathname();
  const { state: searchState, onChange: onChangeSearch } = useInput<{
    search: string | readonly string[] | undefined;
  }>({
    search: getParams.get("name")?.toString(),
  });

  const onSearch = () => {
    navigator.push(`${pathname}?page=${page}&name=${searchState.search}`);
  };

  useEffect(() => {
    onSearch();
  }, [page]);

  return (
    <div className="w-full mt-[68px]">
      <div className="w-full flex justify-between items-center py-5">
        <div className="flex gap-[10px] items-center text-h5 leading-h5 font-b">
          <p>🏢 기업체</p>
        </div>
        <TextFiled
          width="40%"
          placeholder="검색어를 입력해주세요."
          value={searchState.search}
          onChange={onChangeSearch}
          name="search"
          customType="Search"
          iconClick={onSearch}
        />
      </div>
      <CompanyCard />
    </div>
  );
}
