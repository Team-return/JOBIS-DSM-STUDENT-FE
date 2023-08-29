import React from "react";
import styled from "styled-components";
import { Input, RadioButton } from "@team-return/design-system";
import { IsHiddenProps, SignupType } from "./type";

interface PropsType {
  inputStates: SignupType;
  setInputsStates?: React.Dispatch<React.SetStateAction<SignupType>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isHidden: IsHiddenProps;
  setIsHidden: React.Dispatch<React.SetStateAction<IsHiddenProps>>;
}

export const FirstInputs = React.memo(function SecondInputs({
  inputStates,
  handleChange,
  setInputsStates,
}: PropsType) {
  const { grade, name, class_room, number } = inputStates;
  const radioClickMan = () => {
    if (setInputsStates)
      setInputsStates((prev) => ({
        ...prev,
        ["gender"]: "MAN",
      }));
    console.log(inputStates);
  };
  const radioClickWoman = () => {
    if (setInputsStates)
      setInputsStates((prev) => ({
        ...prev,
        ["gender"]: "WOMAN",
      }));
    console.log(inputStates);
  };
  return (
    <>
      <Input
        value={name}
        onChange={handleChange}
        width={100}
        name="name"
        kind="LineInput"
        label="이름"
        placeHolder="이름을 입력해주세요"
      />
      <CalssNumber>
        <Input
          value={grade}
          onChange={handleChange}
          width={100}
          name="grade"
          kind="LineInput"
          type="number"
          label="학번"
          placeHolder="학년"
        />
        <Input
          value={class_room}
          onChange={handleChange}
          width={100}
          name="class_room"
          kind="LineInput"
          type="number"
          label="ㅤ"
          placeHolder="반"
        />
        <Input
          value={number}
          onChange={handleChange}
          width={100}
          name="number"
          kind="LineInput"
          type="number"
          label="ㅤ"
          placeHolder="번호"
        />
      </CalssNumber>
      <Gender>
        <RadioButton name="gender" value="MAN" onClick={radioClickMan}>
          남성
        </RadioButton>
        <RadioButton name="gender" value="WOMAN" onClick={radioClickWoman}>
          여성
        </RadioButton>
      </Gender>
    </>
  );
});

export const SecondInputs = React.memo(function FirstInputs({
  inputStates,
  handleChange,
  isHidden,
  setIsHidden,
}: PropsType) {
  return (
    <>
      <Input
        value={inputStates.email}
        onChange={handleChange}
        width={100}
        name="email"
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
          setIsHidden((prev) => ({
            ...prev,
            ["password"]: !prev.password,
          }));
        }}
        iconName={isHidden.password ? "EyesClose" : "EyesOpen"}
        type={isHidden.password ? "password" : "text"}
      />
      <Input
        value={inputStates.passwordCheck}
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
});

const CalssNumber = styled.div`
  display: flex;
  gap: 20px;
`;
const Gender = styled.div`
  display: flex;
  gap: 30px;
`;
