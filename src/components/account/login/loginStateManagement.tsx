"use client";

import React from "react";
import { RequestBody } from "@/apis/user/type";
import LoginInputs from "@/components/account/login/loginInputsComponents";
import SubmitBtn from "@/components/account/login/submitBtn";
import { useCallback, useState } from "react";
import { Login } from "@/apis/user";
import useInput from "@/hook/useInput";

export default function LoginStateMenagement() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { state: inputStates, onChange: handleChange } = useInput<RequestBody>({
    account_id: "",
    password: "",
  });
  const { mutate: loginClick } = Login(inputStates, isChecked);
  const allIsInputState = useCallback(
    (): boolean => inputStates.account_id !== "" && inputStates.password !== "",
    [inputStates]
  );

  return (
    <div>
      <LoginInputs inputStates={inputStates} handleChange={handleChange} />
      <SubmitBtn
        allIsInputState={allIsInputState}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        loginClick={loginClick}
      />
    </div>
  );
}