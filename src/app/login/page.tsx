"use client";

import { css, styled } from "styled-components";
import { theme, Input, CheckBox } from "@team-return/design-system";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Backgroundg from "@public/LoginBackground.svg";
import { Login } from "@/apis/user";
import { RequestBody } from "@/apis/user/type";

export default function LoginPage() {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [inputStates, setInputStates] = useState<RequestBody>({
    account_id: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputStates((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const { mutate: loginClick } = Login(inputStates, isChecked);

  return (
    <Warpper>
      <Container>
        <div>
          <Header>
            <p>로그인</p>
          </Header>
          <main>
            <Inputs autoComplete="off">
              <Input
                value={inputStates.account_id}
                onChange={handleChange}
                width={100}
                name="account_id"
                kind="LineInput"
                label="이메일"
                placeHolder="이메일을 입력해주세요"
              />
              <Input
                value={inputStates.password}
                onChange={handleChange}
                width={100}
                name="password"
                kind="LineInput"
                label="비밀번호"
                placeHolder="비밀번호를 입력해주세요"
                iconClick={() => {
                  setIsHidden((prev) => !prev);
                }}
                iconName={isHidden ? "EyesClose" : "EyesOpen"}
                type={isHidden ? "password" : "text"}
              />
            </Inputs>
            <Submit
              light={
                inputStates.account_id !== "" && inputStates.password !== ""
              }
            >
              <div className="saveId">
                <CheckBox
                  children="아이디 저장"
                  checked={isChecked}
                  onClick={() => {
                    setIsChecked((prev) => !prev);
                  }}
                />
              </div>
              <button
                disabled={
                  inputStates.account_id == "" || inputStates.password == ""
                }
                onClick={() => {
                  loginClick();
                  ``;
                }}
              >
                로그인
              </button>
              <Link className="signup" href="/signup">
                회원가입
              </Link>
            </Submit>
          </main>
        </div>
      </Container>
      <BackgroundImg src={Backgroundg} alt="" />
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

const Container = styled.div`
  min-width: 400px;
  width: 45%;
  height: 650px;
  display: flex;
  justify-content: center;
  background-color: white;
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
  display: block;
  p {
    ${theme.font.Heading1}
    line-height: 45px;
    color: ${theme.color.skyblue};
  }
`;

const Inputs = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0;
`;

const Submit = styled.div<{ light: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 15px;
  color: ${theme.color.gray60};
  .saveId {
    width: 100%;
  }
  .signup {
    margin-top: 10px;
    color: ${theme.color.gray60};
  }
  > button {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: ${theme.color.gray40};
    cursor: default;
    color: ${theme.color.gray10};
    ${(props) =>
      props.light &&
      css`
        background-color: ${theme.color.liteBlue};
        cursor: pointer;
      `}
    ${theme.font.Body1}
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
