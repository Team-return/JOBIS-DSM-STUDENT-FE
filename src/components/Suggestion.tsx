import { styled } from "styled-components";
import Image from "next/image";
import { theme, Icon } from "@team-return/design-system";
import CardList from "./CardList";
import Building from "@public/Building.svg";
import Pushpin from "@public/Pushpin.svg";
import Smile from "@public/Smile.svg";
import IconTitle from "./IconTitle";

interface PropsType {
  listType: "Company" | "Recruitments" | "BookMark";
}

const fix_data = {
  Company: {
    title: "이런 기업은 어떠세요?",
    emoji: Building,
    router: "/company",
  },
  Recruitments: {
    title: `${"강용수"}의 관심 분야에요`,
    emoji: Smile,
    router: "/recruitements",
  },
  BookMark: {
    title: "내가 저장한 모집의뢰서",
    emoji: Pushpin,
  },
};

export default function Suggestion({ listType }: PropsType) {
  return (
    <Warpper>
      <Header>
        <IconTitle icon={fix_data[listType].emoji}>
          {fix_data[listType].title}
        </IconTitle>
        <ShowAllBtn>
          전체보기
          <Icon icon="Chevron" direction="right" size={18} color="gray60" />
        </ShowAllBtn>
      </Header>
      <CardList listType={listType} />
    </Warpper>
  );
}

const Warpper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const Header = styled.header`
  display: flex;
  align-items: end;
  margin-bottom: 12px;
`;
const ShowAllBtn = styled.button`
  width: 120px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${theme.color.gray60};
  background: none;
  border: none;
  cursor: pointer;
`;
