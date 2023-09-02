import { Icon, theme } from "@team-return/design-system";
import Image from "next/image";
import styled from "@emotion/styled";
import BannerBackground from "@public/BannerBackground.png";
import Guy from "@public/Guy.png";

export default function EmploymentBanner() {
  return (
    <Container onClick={() => {}}>
      <TextWarpper>
        <Title>우리학교 학생들은 얼마나 취업했을까?</Title>
        <ShowGO>
          취업률 보러가기{" "}
          <Icon icon="Chevron" direction="right" color="gray10" />
        </ShowGO>
      </TextWarpper>
      <BackgroundImg
        width={0}
        height={0}
        src={BannerBackground}
        alt="배경이미지"
      />
      <GuyImg src={Guy} alt="사람" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 108px;
  padding: 22px 100px;
  margin-top: 80px;
  cursor: pointer;
  position: relative;
`;

const TextWarpper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  ${theme.font.Heading5}
  font-weight: 900;
  color: ${theme.color.gray10};
`;
const ShowGO = styled.div`
  display: flex;
  ${theme.font.Body2}
  color: ${theme.color.gray10};
  margin-top: 4px;
`;

const BackgroundImg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  z-index: -1;
`;

const GuyImg = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 100px;
  width: 147px;
  height: 173px;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
