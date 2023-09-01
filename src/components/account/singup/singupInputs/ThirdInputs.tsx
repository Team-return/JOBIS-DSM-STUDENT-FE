import { Signup } from "@/apis/students";
import LargeBtn from "@/components/common/LargeBtn";
import useSignUpContext from "@/hook/useSignupContext";
import { Input, theme, useToastStore } from "@team-return/design-system";
import React, { useState } from "react";
import styled from "styled-components";

function ThirdInputs() {
  const { signupState, handleChange } = useSignUpContext();
  const [isHidden, setIsHidden] = useState({
    password: true,
    passwordCheck: true,
  });
  const {
    email,
    password,
    passwordCheck,
    gender,
    grade,
    class_room,
    number,
    name,
  } = signupState;

  const { append } = useToastStore();
  const { mutate } = Signup();

  const SignupAPI = () => {
    const RequestBody = {
      email,
      password,
      gender,
      name,
      grade: Number(grade),
      class_room: Number(class_room),
      number: Number(number),
    };
    mutate(RequestBody);
  };
  const onClickSubmit = () => {
    if (password === passwordCheck) {
      SignupAPI();
      return 0;
    }
    append({
      title: "",
      message: "비밀번호가 일치하지 않습니다.",
      type: "RED",
    });
  };
  return (
    <>
      <Inputs>
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
      </Inputs>
      <Submit>
        <LargeBtn
          text="가입하기"
          disabled={!!password && !!passwordCheck}
          onClick={onClickSubmit}
        />
      </Submit>
    </>
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

export default React.memo(ThirdInputs);
