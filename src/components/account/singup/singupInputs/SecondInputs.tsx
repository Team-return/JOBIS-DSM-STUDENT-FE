import { SendAuthCode } from "@/apis/auth";
import useSignUpContext from "@/hook/useSignupContext";
import { Input, theme } from "@team-return/design-system";
import React from "react";
import styled from "styled-components";
import { SecondInputsPropsType } from "../type";

function SecondInputs() {
  const { signupState, handleChange } = useSignUpContext();
  const { email, auth_code } = signupState;

  const { mutate: SandAuthCodeAPI } = SendAuthCode();
  return (
    <>
      <Email disabled={email === ""}>
        <Input
          value={email}
          onChange={handleChange}
          width={100}
          name="email"
          kind="LineInput"
          label="이메일"
          placeHolder="이메일을 입력해주세요"
        />
        <button
          onClick={() => {
            if (SandAuthCodeAPI)
              SandAuthCodeAPI({
                email: email,
                auth_code_type: "SIGN_UP",
              });
          }}
          disabled={email === ""}
        >
          메일발송
        </button>
      </Email>
      <Input
        value={auth_code}
        onChange={handleChange}
        width={100}
        name="auth_code"
        kind="LineInput"
        label="인증코드"
        placeHolder="인증코드를 입력해주세요"
      />
    </>
  );
}

const Email = styled.div<{ disabled: boolean }>`
  display: flex;
  gap: 20px;
  align-items: end;
  button {
    height: 35px;
    width: 100px;
    border-radius: 8px;
    border: 0;
    background-color: ${(props) =>
      props.disabled ? theme.color.gray40 : theme.color.skyblue}
    color: ${theme.color.gray10}
  }
`;

export default React.memo(SecondInputs);
