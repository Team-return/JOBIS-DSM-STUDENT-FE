import { styled } from "styled-components";
import Image from "next/image";
import { theme, Icon } from "@team-return/design-system";
import CardList from "./CardList";
import Building from "../../public/Building.svg";
import Pushpin from "../../public/Pushpin.svg";
import Smile from "../../public/Smile.svg";

interface PropsType {
  listType: "Company" | "Recruitments" | "BookMark";
}

const fix_data = {
  Company: {
    title: "이런 기업은 어떠세요?",
    emoji: Building,
  },
  Recruitments: {
    title: `${"강용수"}님이 관심있는 분야에요`,
    emoji: Smile,
  },
  BookMark: {
    title: "북마크한 모집의뢰서",
    emoji: Pushpin,
  },
};

export default function Suggestion({ listType }: PropsType) {
  return (
    <Warpper>
      <Title>
        <Image src={fix_data[listType].emoji} alt="제목 아이콘" />
        <p>{fix_data[listType].title}</p>
      </Title>
      <ShowAllBtn>
        전체보기
        <Icon icon="Chevron" direction="right" color="gray60" />
      </ShowAllBtn>
      <CardList listType={listType} />
    </Warpper>
  );
}

const Warpper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  ${theme.font.Heading5}
`;
const ShowAllBtn = styled.button`
  width: 120px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${theme.font.Body2}
  color: ${theme.color.gray60};
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
`;
