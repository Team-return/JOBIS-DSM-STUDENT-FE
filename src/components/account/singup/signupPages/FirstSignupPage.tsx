"use client";

import { CheckAuthCode, SendAuthCode } from "@/apis/auth";
import LargeBtn from "@/components/common/Button/LargeBtn";
import TextFiled from "@/components/common/TextFiled";
import useSignUpContext from "@/hook/useSignupContext";
import { theme, useToastStore } from "@team-return/design-system";
import { useRouter } from "next/navigation";
import React from "react";

function FirstSignupPage() {
  const { signupState, handleChange } = useSignUpContext();
  const { email, auth_code, password, passwordCheck } = signupState;
  const { append } = useToastStore();
  const navigator = useRouter();
  const { mutate: SandAuthCodeAPI } = SendAuthCode();
  const { mutate: CheckAuthCodeAPI } = CheckAuthCode(
    {
      email,
      auth_code,
    },
    {
      onSuccess: () => {
        navigator.push("signup?page=2");
      },
    }
  );

  return (
    <div>
      <div className="flex flex-col gap-4 py-10">
        <div className="flex items-end gap-3">
          <TextFiled
            value={email}
            onChange={handleChange}
            width={"100%"}
            height={48}
            name="email"
            label="이메일"
            placeholder="이메일을 입력해주세요"
          />
          <button
            className={`h-[48px] px-6 rounded-[8px] border-none text-[${theme.color.liteBlue}] bg-white hover:bg-[${theme.color.liteBlue}] hover:text-white text-b3 leading-b3 font-r whitespace-nowrap`}
            style={{ border: `1px solid ${theme.color.liteBlue}` }}
            onClick={() => {
              SandAuthCodeAPI &&
                SandAuthCodeAPI({
                  email,
                  auth_code_type: "SIGN_UP",
                });
            }}
            disabled={!email}
          >
            인증
          </button>
        </div>
        <TextFiled
          value={auth_code}
          onChange={handleChange}
          name="auth_code"
          width={"100%"}
          height={48}
          label="인증번호"
          placeholder="인증번호를 입력해주세요"
        />
        <TextFiled
          value={password}
          onChange={handleChange}
          name="password"
          width={"100%"}
          height={48}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
        />
        <TextFiled
          value={passwordCheck}
          onChange={handleChange}
          name="passwordCheck"
          width={"100%"}
          height={48}
          label="비밀번호 확인"
          placeholder="비밀번호를 한번 더 입력해주세요"
        />
      </div>
      <div
        className={`flex flex-col items-center w-full mt-2 gap-[15px] text-[${theme.color.gray60}]`}
      >
        <LargeBtn
          text="다음으로"
          disabled={
            !!signupState.email &&
            !!signupState.auth_code &&
            !!signupState.password &&
            !!signupState.passwordCheck
          }
          onClick={() => {
            if (password === passwordCheck) {
              CheckAuthCodeAPI();
            } else {
              append({
                title: "",
                message: "비밀번호가 일치하지 않습니다.",
                type: "RED",
              });
            }
          }}
        />
      </div>
    </div>
  );
}

export default React.memo(FirstSignupPage);
