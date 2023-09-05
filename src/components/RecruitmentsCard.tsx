import { theme, Icon } from "@team-return/design-system";
import Image from "next/image";
import styled from "@emotion/styled";
import { RecruitmentsInfo } from "@/util/Type/RecruitmentsType";
import React from "react";

interface PropsType {
  recruitments_list: RecruitmentsInfo[];
}

export default function RecruitmentsCard({ recruitments_list }: PropsType) {
  return (
    <WarpperGrid>
      {recruitments_list.map(
        ({
          company_profile_url,
          company_name,
          train_pay,
          job_code_list,
          bookmarked,
        }) => (
          <Container onClick={() => {}}>
            <Img>
              <Image width={0} height={0} src={company_profile_url} alt="" />
            </Img>
            <Info>
              <Title>{job_code_list}</Title>
              <CompanyName>{company_name}</CompanyName>
              <Tags>
                <Tag>실습수당 {train_pay}만원</Tag>
                <Tag>병역특례</Tag>
              </Tags>
              <BookMark
                aria-label="bookMarkBtn"
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  event.stopPropagation();
                }}
              >
                <Icon
                  icon={`Bookmark${bookmarked ? "On" : "Off"}`}
                  color={bookmarked ? "skyblue" : "gray60"}
                />
              </BookMark>
            </Info>
          </Container>
        )
      )}
    </WarpperGrid>
  );
}

const WarpperGrid = styled.div`
  width: 100%;
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5vw;
  @media (max-width: 999px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Container = styled.div`
  width: 100%;
  cursor: pointer;
`;

const Img = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 70%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
    border: 2px solid ${theme.color.gray20};
  }
`;

const Info = styled.div`
  position: relative;
  border-radius: 0 0 12px 12px;
  background-color: ${theme.color.gray20};
  padding: 14px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: ${theme.color.gray90};
`;

const CompanyName = styled.p`
  font-size: 14px;
  color: ${theme.color.gray70};
  line-height: 20px;
  margin-top: 4px;
`;

const Tags = styled.div`
  display: flex;
  margin-top: 24px;
  flex-wrap: wrap;
  width: inherit;
  overflow-x: scroll;
  white-space: nowrap;
  gap: 4px;
`;

const Tag = styled.div`
  ${theme.font.Body4}
  color: ${theme.color.liteBlue};
  border: 1px solid ${theme.color.liteBlue};
  border-radius: 100px;
  padding: 4px 8px;
`;

const BookMark = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
`;
