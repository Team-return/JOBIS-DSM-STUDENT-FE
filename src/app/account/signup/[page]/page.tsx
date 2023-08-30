"use client";

import SingupContainer from "@/components/account/singup/signupStateManagement";
import AccountPageTemplate from "@/components/account/accountPageTemplate";
import { SignupContext } from "@/context/SignupContext";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { SignupType } from "@/components/account/singup/type";

export default function SignupPage() {
  //marge후 useinput으로 교체
  const [signupState, setSignupState] = useState<SignupType>({
    email: "",
    auth_code: "",
    password: "",
    passwordCheck: "",
    grade: undefined,
    name: "",
    gender: undefined,
    class_room: undefined,
    number: undefined,
  });
  //marge후 useinput으로 교체
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);

  useEffect(() => {
    console.log(signupState);
  }, [signupState]);
  return (
    <SignupContext.Provider
      value={{ signupState, setSignupState, handleChange }}
    >
      <AccountPageTemplate title="회원가입">
        <SingupContainer />
      </AccountPageTemplate>
    </SignupContext.Provider>
  );
}
