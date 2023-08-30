import React from "react";
import { CheckBox, theme } from "@team-return/design-system";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Link from "next/link";
import styled, { css } from "styled-components";
import { ResponseBody } from "@/apis/user/type";

interface PropsType {
  allIsInputState: () => boolean;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  loginClick: UseMutateFunction<
    ResponseBody,
    AxiosError<unknown, any>,
    void,
    unknown
  >;
}

function SubmitBtn({
  allIsInputState,
  isChecked,
  setIsChecked,
  loginClick,
}: PropsType) {
  console.log(allIsInputState());
  return (
    
    <Submit light={allIsInputState()}>
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
        disabled={!allIsInputState()}
        onClick={() => {
          console.log("잘 옴");
          loginClick();
        }}
      >
        로그인
      </button>
      <Link className="signup" href="/account/signup">
        회원가입
      </Link>
    </Submit>
  );
}

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

export default React.memo(SubmitBtn);
