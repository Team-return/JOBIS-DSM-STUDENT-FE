import useSignUpContext from "@/hook/useSignupContext";
import { Input, RadioButton } from "@team-return/design-system";
import React from "react";
import styled from "styled-components";
import { FirstInputsPropsType } from "../type";

function FirstInputs() {
  const { signupState, setSignupState, handleChange } = useSignUpContext();
  const { grade, name, class_room, number } = signupState;
  const radioClickMan = () => {
    setSignupState((prev) => ({
      ...prev,
      ["gender"]: "MAN",
    }));
  };
  const radioClickWoman = () => {
    setSignupState((prev) => ({
      ...prev,
      ["gender"]: "WOMAN",
    }));
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
}

const CalssNumber = styled.div`
  display: flex;
  gap: 20px;
`;
const Gender = styled.div`
  display: flex;
  gap: 30px;
`;

export default React.memo(FirstInputs);