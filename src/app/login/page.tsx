"use client";

import { styled } from "styled-components";
import Logo from "@public/Logo.svg";
import Image from "next/image";
import { theme } from "@team-return/design-system";
import TextFiled from "@/components/common/TextFiled";

export default function Login() {
  return (
    <Warpper>
      <Container>
        <div>
          <Header>
            <Image height={18} src={Logo} alt="logo" />
            <p>로그인</p>
          </Header>
          <main>
            <Inputs>
              <TextFiled />
            </Inputs>
          </main>
        </div>
      </Container>
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
    background-color: red;
  }
`;

const Container = styled.div`
  min-width: 400px;
  width: 50%;
  height: 650px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
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
  p {
    ${theme.font.Heading1}
    font-weight: 500;
    line-height: 45px;
    color: ${theme.color.gray80};
  }
`;

const Inputs = styled.div``;
