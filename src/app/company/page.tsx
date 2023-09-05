"use client";

import styled from "@emotion/styled";
import BuildingIcon from "@public/Building.svg";
import IconTitle from "@/components/IconTitle";
import TextFiled from "@/components/common/TextFiled";
import useInput from "@/hook/useInput";
import { theme } from "@team-return/design-system";
import CardList from "@/components/CardList";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { URL } from "url";

export default function CompanyListPage() {
  const getParams = useSearchParams();
  const [page, setPage] = useState(Number(getParams.get("page")));
  const navigator = useRouter();
  const pathname = usePathname();
  const { state: searchState, onChange: onChangeSearch } = useInput<{
    search: string | number | readonly string[] | undefined;
  }>({
    search: getParams.get("name")?.toString(),
  });

  const onSearch = () => {
    navigator.push(`${pathname}?page=${page}&name=${searchState.search}`);
  };

  useEffect(() => {
    onSearch();
  }, [page]);

  // icon={BuildingIcon}

  return (
    <Main>
      <SubHeader>
        <IconTitle>🏢 기업체</IconTitle>
        <TextFiled
          placeholder="검색어를 입력해주세요."
          value={searchState.search}
          onChange={onChangeSearch}
          name="search"
          customType="Search"
          enterEvent={onSearch}
        />
      </SubHeader>
      <CardList listType="Company" />
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  margin-top: 68px;
`;
const SubHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
