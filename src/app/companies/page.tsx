"use client";

import Pagination from "@/components/common/Pagination";
import TextFiled from "@/components/common/TextFiled";
import CompanyCard from "@/components/company/CompanyCard";
import useForm from "@/hook/useForm";
import { CompaniesQueryType } from "@/hook/useQueryString/type";
import { useQueryString } from "@/hook/useQueryString/useQueryString";

export default function CompanyListPage() {
  const { getQueryString, setQueryString } = useQueryString<CompaniesQueryType>(
    {
      page: "1",
      name: "",
    }
  );
  const { state: searchState, onChange: onChangeSearch } = useForm<{
    search: string | undefined;
  }>({
    search: getQueryString("name"),
  });

  return (
    <div className="w-full mt-[68px]">
      <div className="flex items-center justify-between w-full py-5">
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
          enterEvent={() => {
            setQueryString({ name: searchState.search });
          }}
        />
      </div>
      <CompanyCard />
      <Pagination />
    </div>
  );
}
