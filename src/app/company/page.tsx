"use client";

import styled from "@emotion/styled";
import BuildingIcon from "@public/Building.svg";
import IconTitle from "@/components/IconTitle";
import TextFiled from "@/components/common/TextFiled";
import useInput from "@/hooks/useInput";
import { theme } from "@team-return/design-system";
import CardList from "@/components/CardList";

export default function CompanyListPage() {
  const { state, onChange } = useInput({ search: "" });
  return (
    <>
      <Main>
        <SubHeader>
          <IconTitle icon={BuildingIcon}>기업체</IconTitle>
          <TextFiled
            placeholder="검색어를 입력해주세요."
            value={state.search}
            onChange={onChange}
            name="search"
            customType="Search"
          />
        </SubHeader>
        <CardList listType="Company" />
      </Main>
    </>
  );
}

const Main = styled.div`
  width: 100%;
  margin-top: 68px;
  > hr {
    background-color: ${theme.color.gray40};
    height: 1px;
    border: 0;
  }
`;
const SubHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
