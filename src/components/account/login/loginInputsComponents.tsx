import { RequestBody } from "@/apis/user/type";
import { Input } from "@team-return/design-system";
import React, { useState } from "react";
import styled from "styled-components";

interface PropsType {
  inputStates: RequestBody;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LoginInputs({ inputStates, handleChange }: PropsType) {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  return (
    <Inputs>
      <Input
        value={inputStates.account_id}
        onChange={handleChange}
        width={100}
        name="account_id"
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
          setIsHidden((prev) => !prev);
        }}
        iconName={isHidden ? "EyesClose" : "EyesOpen"}
        type={isHidden ? "password" : "text"}
      />
    </Inputs>
  );
}

const Inputs = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0;
`;

export default React.memo(LoginInputs);
