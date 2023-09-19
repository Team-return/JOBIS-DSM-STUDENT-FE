'use client'

import { SignupType } from "@/components/account/singup/type";
import { ChangeEvent, createContext, Dispatch, SetStateAction } from "react";

interface SignupContextType {
  signupState: SignupType;
  setSignupState: Dispatch<SetStateAction<SignupType>>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SignupContext = createContext<SignupContextType>({
  signupState: {
    email: "",
    auth_code: "",
    password: "",
    passwordCheck: "",
    grade: undefined,
    name: "",
    gender: undefined,
    class_room: undefined,
    number: undefined,
  },
  setSignupState: () => {},
  handleChange: (e) => {},
});
