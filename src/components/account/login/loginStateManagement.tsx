"use client";

import React from "react";
import { RequestBody } from "@/apis/user/type";
import LoginInputs from "@/components/account/login/loginInputsComponents";
import SubmitBtn from "@/components/account/login/submitBtn";
import { useCallback, useState } from "react";
import { useLogin } from "@/apis/user";
import useForm from "@/hook/useForm";

export default function LoginStateMenagement() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { state: inputStates, onChange: handleChange } = useForm<RequestBody>({
    account_id: "",
    password: "",
  });
  const { mutate: loginClick } = useLogin(inputStates, isChecked);
  const allIsInputState = useCallback(
    (): boolean => inputStates.account_id !== "" && inputStates.password !== "",
    [inputStates]
  );

  return (
    <div>
      <LoginInputs
        inputStates={inputStates}
        handleChange={handleChange}
        enterEvent={loginClick}
      />
      <SubmitBtn
        allIsInputState={allIsInputState}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        loginClick={loginClick}
      />
    </div>
  );
}
