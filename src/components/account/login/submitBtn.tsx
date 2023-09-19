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
  return (
    <div className="w-full flex flex-col items-center gap-[15px] text-[#7f7f7f]">
      <div className="w-full mb-[40px]">
        <CheckBox
          children="자동 로그인"
          checked={isChecked}
          onClick={() => {
            setIsChecked((prev) => !prev);
          }}
        />
      </div>
      <button
        className={`w-full h-[48px] border-none rounded-[8px] ${
          allIsInputState() ? "bg-[#135C9D]" : "bg-[#E5E5E5]"
        } cursor-defualt text-white text-b3 font-b`}
        disabled={!allIsInputState()}
        onClick={() => {
          loginClick();
        }}
      >
        로그인
      </button>
      <p className="mt-[10px] text-caption text-black font-m">
        아직 회원이 아니신가요? <Link className="font-b text-subBlue" href="/account/signup/1">회원가입</Link>
      </p>
    </div>
  );
}

const Submit = styled.div<{ light: boolean }>`
  > button {
    ${(props) =>
      props.light &&
      css`
        background-color: ${theme.color.liteBlue};
        cursor: pointer;
      `}
  }
`;

export default React.memo(SubmitBtn);
