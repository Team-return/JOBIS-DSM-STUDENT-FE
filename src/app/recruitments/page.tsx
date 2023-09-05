"use client";

import CardList from "@/components/CardList";
import TextFiled from "@/components/common/TextFiled";
import IconTitle from "@/components/IconTitle";
import useInput from "@/hook/useInput";
import styled from "@emotion/styled";
import { Icon, theme } from "@team-return/design-system";

export default function Recruitments() {
  const { state: searchState, onChange: onChangeSearch } = useInput({
    search: "",
  });

  const onSearch = () => {};

  return (
    <Main>
      <SubHeader>
        <IconTitle>📄 모집의뢰서</IconTitle>
        <Filter>
          <DropDownContainer>
            <p>분야</p>
            <Icon icon="Chevron" color="gray60" />
          </DropDownContainer>
          <DropDownContainer>
            <p>기술스택</p>
            <Icon icon="Chevron" color="gray60" />
          </DropDownContainer>
          <TextFiled
            placeholder="검색어를 입력해주세요."
            value={searchState.search}
            onChange={onChangeSearch}
            name="search"
            customType="Search"
            enterEvent={onSearch}
            width="26vw"
          />
        </Filter>
      </SubHeader>
      <CardList listType="Recruitments" />
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

const Filter = styled.div`
  display: flex;
  gap: 16px;
`;

const DropDownContainer = styled.div`
  height: 40px;
  padding: 0 12px 0 16px;
  border: 1px solid ${theme.color.gray50};
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 23px;
  font-size: 14px;
  color: ${theme.color.gray60};
`;
