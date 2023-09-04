import { CheckAuthCode, SendAuthCode } from "@/apis/auth";
import LargeBtn from "@/components/common/LargeBtn";
import useSignUpContext from "@/hook/useSignupContext";
import { Input, theme } from "@team-return/design-system";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

function SecondInputs() {
  const { signupState, handleChange } = useSignUpContext();
  const { email, auth_code } = signupState;
  const navigator = useRouter();
  const { mutate: SandAuthCodeAPI } = SendAuthCode();
  const { mutate: CheckAuthCodeAPI } = CheckAuthCode(
    {
      email,
      auth_code,
    },
    {
      onSuccess: () => {
        navigator.push("/account/signup/3");
      },
    }
  );

  return (
    <>
      <Inputs>
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
              SandAuthCodeAPI &&
                SandAuthCodeAPI({
                  email: email,
                  auth_code_type: "SIGN_UP",
                });
            }}
            disabled={!!email}
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
      </Inputs>
      <Submit>
        <LargeBtn
          text="다음"
          disabled={!!signupState.email && !!signupState.auth_code}
          onClick={() => {
            CheckAuthCodeAPI();
          }}
        />
      </Submit>
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

export default React.memo(SecondInputs);
