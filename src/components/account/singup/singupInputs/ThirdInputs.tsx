import useSignUpContext from "@/hook/useSignupContext";
import { Input } from "@team-return/design-system";
import React, { useState } from "react";
import { ThirdInputsPropsType } from "../type";

function ThirdInputs() {
  const { signupState, handleChange } = useSignUpContext();
  const { password, passwordCheck } = signupState;
  const [isHidden, setIsHidden] = useState({
    password: true,
    passwordCheck: true,
  });
  return (
    <>
      <Input
        value={password}
        onChange={handleChange}
        width={100}
        name="password"
        kind="LineInput"
        label="비밀번호"
        placeHolder="비밀번호를 입력해주세요"
        iconClick={() => {
          setIsHidden((prev) => ({
            ...prev,
            ["password"]: !prev.password,
          }));
        }}
        iconName={isHidden.password ? "EyesClose" : "EyesOpen"}
        type={isHidden.password ? "password" : "text"}
      />
      <Input
        value={passwordCheck}
        onChange={handleChange}
        width={100}
        name="passwordCheck"
        kind="LineInput"
        label="비밀번호 확인"
        placeHolder="비밀번호를 입력해주세요"
        iconClick={() => {
          setIsHidden((prev) => ({
            ...prev,
            ["passwordCheck"]: !prev.passwordCheck,
          }));
        }}
        iconName={isHidden.passwordCheck ? "EyesClose" : "EyesOpen"}
        type={isHidden.passwordCheck ? "password" : "text"}
      />
    </>
  );
}

export default React.memo(ThirdInputs);
