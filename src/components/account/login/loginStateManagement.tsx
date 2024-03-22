"use client";

import { useLogin } from "@/apis/user";
import { RequestBody } from "@/apis/user/type";
import LoginInputs from "@/components/account/login/loginInputsComponents";
import SubmitBtn from "@/components/account/login/submitBtn";
import useForm from "@/hook/useForm";
import { CheckPasswordFormat } from "@/util/passwordFormat";
import { useCallback, useState } from "react";

export default function LoginStateMenagement() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const passwordFormat = CheckPasswordFormat();
  const { state: inputStates, onChange: handleChange } = useForm<RequestBody>({
    account_id: "",
    password: "",
  });
  const { mutate: login } = useLogin(inputStates, isChecked);
  const allIsInputState = useCallback(
    (): boolean => inputStates.account_id !== "" && inputStates.password !== "",
    [inputStates]
  );

  return (
    <div>
      <LoginInputs
        inputStates={inputStates}
        handleChange={handleChange}
        enterEvent={() => {
          passwordFormat(inputStates.password, login);
        }}
      />
      <SubmitBtn
        allIsInputState={allIsInputState}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        loginClick={() => {
          passwordFormat(inputStates.password, login);
        }}
      />
    </div>
  );
}
