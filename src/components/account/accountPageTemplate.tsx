import styled from "styled-components";
import BackgroundImage from "@public/LoginBackground.svg";
import Image from "next/image";
import { theme } from "@team-return/design-system";

interface PropsType {
  title: string;
  children: JSX.Element;
}

export default function AccountPageTemplate({ title, children }: PropsType) {
  return (
    <Warpper>
      <Container>
        <div>
          <Header>
            <p>{title}</p>
          </Header>
          <main>{children}</main>
        </div>
      </Container>
      <BackgroundImg src={BackgroundImage} alt="" />
    </Warpper>
  );
}

const Warpper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  main {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const BackgroundImg = styled(Image)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 102vw;
  object-fit: cover;
  z-index: -1;
  margin-left: -10px;
`;

const Container = styled.div`
  min-width: 400px;
  width: 45%;
  height: 650px;
  display: flex;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  > div {
    max-width: 450px;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 70px 0;
    > div {
      width: 100%;
    }
  }
`;

const Header = styled.div`
  display: block;
  p {
    ${theme.font.Heading1}
    line-height: 45px;
    color: ${theme.color.skyblue};
  }
`;
