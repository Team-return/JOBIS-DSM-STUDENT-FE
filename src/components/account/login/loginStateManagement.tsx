import React from "react";
import { RequestBody } from "@/apis/user/type";
import LoginInputs from "@/components/account/login/loginInputsComponents";
import SubmitBtn from "@/components/account/login/submitBtn";
import { useCallback, useState } from "react";
import { Login } from "@/apis/user";

export default function LoginStateMenagement() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  //merge 후 useInput으로 대체
  const [inputStates, setInputStates] = useState<RequestBody>({
    account_id: "",
    password: "",
  });

  //merge 후 useInput으로 대체
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputStates((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);
  const { mutate: loginClick } = Login(inputStates, isChecked);
  const allIsInputState = useCallback(
    (): boolean => inputStates.account_id !== "" && inputStates.password !== "",
    [inputStates]
  );

  return (
    <div>
      <LoginInputs
        inputStates={inputStates}
        handleChange={handleChange}
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
