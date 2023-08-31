import { styled } from "styled-components";
import { theme } from "@team-return/design-system";
import React, { ChangeEvent, useCallback, useState } from "react";
import { SignupType, IsHiddenProps } from "./type";
import LargeBtn from "@/components/common/LargeBtn";
import { Signup } from "@/apis/students";
import { CheckAuthCode, SendAuthCode } from "@/apis/auth";
import { useParams, useRouter } from "next/navigation";
import InputsComponents from "./singupInputs";
import useSignUpContext from "@/hook/useSignupContext";

export default function SingupContainer() {
  const navigator = useRouter();
  const param = useParams();
  const { signupState } = useSignUpContext();
  const {
    email,
    auth_code,
    password,
    passwordCheck,
    grade,
    name,
    gender,
    class_room,
    number,
  } = signupState;

  const { mutate: SignupAPI } = Signup();
  const { mutate: CheckAuthCodeAPI } = CheckAuthCode();

  const { page } = param;

  const pageNation = [
    {
      text: "다음",
      onClick: () => {
        navigator.push("/account/signup/2");
      },
    },
    {
      text: "다음",
      onClick: async () => {
        await CheckAuthCodeAPI({
          email: email,
          auth_code: auth_code,
        });
        navigator.push("/account/signup/3");
      },
    },
    {
      text: "가입하기",
      onClick: () => {
        const RequestBody = {
          email,
          password,
          gender,
          name,
          grade: Number(grade),
          class_room: Number(class_room),
          number: Number(number),
        };
        SignupAPI(RequestBody);
      },
    },
  ];

  const allDataChecked = useCallback((): boolean => {
    if (page === "1")
      return !!grade && !!name && !!gender && !!class_room && !!number;
    else if (page === "2") return !!email && !!auth_code;
    return password !== "" && passwordCheck !== "";
  }, [signupState, page]);

  return (
    <div>
      <Inputs>
        <InputsComponents page={page} />
      </Inputs>
      <Submit>
        <LargeBtn
          text={pageNation[+page - 1]?.text}
          disabled={allDataChecked}
          onClick={pageNation[+page - 1]?.onClick}
        />
      </Submit>
    </div>
  );
}

const Submit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 15px;
  color: ${theme.color.gray60};
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0;
`;
