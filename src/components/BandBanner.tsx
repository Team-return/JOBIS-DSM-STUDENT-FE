import { Icon, theme } from "@team-return/design-system";
import Image from "next/image";
import styled from "@emotion/styled";
import BannerBackground from "@public/BannerBackground.png";
import Guy from "@public/Guy.png";

export default function BandBanner() {
  return (
    <Container
      onClick={() => {
        //취업율 링크 이동
      }}
    >
      <TextWarpper>
        <Title>우리학교 학생들은 얼마나 취업했을까?</Title>
        <ShowGO>
          <p>취업률 보러가기</p>
          <Icon icon="Chevron" direction="right" color="gray10" size={16} />
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
  height: 120px;
  padding: 28px 100px;
  margin-top: 80px;
  cursor: pointer;
  position: relative;
`;

const TextWarpper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.color.gray10};
`;
const ShowGO = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${theme.color.gray10};
  width: 117px;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.2);
  margin-top: 12px;
  border-radius: 100px;
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
  width: 121px;
  height: 143px;
  margin-right: 50px;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
