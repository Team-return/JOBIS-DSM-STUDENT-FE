import { css, styled } from "styled-components";
import { theme, Input } from "@team-return/design-system";
import React, { ChangeEvent, useCallback, useState } from "react";
import { SignupType, IsHiddenProps } from "./type";
import { FirstInputs, SecondInputs } from "./dataComponent";
import LargeBtn from "@/components/common/LargeBtn";

export default function SingupContainer() {
  const [isHidden, setIsHidden] = useState<IsHiddenProps>({
    password: true,
    passwordCheck: true,
  });
  const [page, setPage] = useState<0 | 1>(0);
  const [inputStates, setInputStates] = useState<SignupType>({
    email: "",
    password: "",
    passwordCheck: "",
    grade: "",
    name: "",
    gender: undefined,
    class_room: undefined,
    number: undefined,
  });
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputStates((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);

  const pageNation = [
    {
      text: "다음",
      onClick: () => {
        setPage(1);
      },
    },
    {
      text: "가입하기",
      onClick: () => {
        console.log("가입하기");
      },
    },
  ];

  const allDataChecked = useCallback((): boolean => {
    const {
      email,
      password,
      passwordCheck,
      grade,
      name,
      gender,
      class_room,
      number,
    } = inputStates;

    if (page === 0)
      return (
        grade !== "" &&
        name !== "" &&
        gender !== undefined &&
        class_room !== undefined &&
        number !== undefined
      );
    return email !== "" && password !== "" && passwordCheck !== "";
  }, [inputStates, page]);

  return (
    <div>
      <Inputs>
        {page === 0 && (
          <FirstInputs
            inputStates={inputStates}
            setInputsStates={setInputStates}
            handleChange={handleChange}
            isHidden={isHidden}
            setIsHidden={setIsHidden}
          />
        )}
        {page === 1 && (
          <SecondInputs
            inputStates={inputStates}
            handleChange={handleChange}
            isHidden={isHidden}
            setIsHidden={setIsHidden}
          />
        )}
      </Inputs>
      <Submit light={allDataChecked()}>
        <LargeBtn
          text={pageNation[page].text}
          disabled={allDataChecked}
          onClick={pageNation[page].onClick}
        />
      </Submit>
    </div>
  );
}

const Submit = styled.div<{ light: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 15px;
  color: ${theme.color.gray60};
`;

const Inputs = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0;
`;
