import { SignupContext } from "@/context/SignupContext";
import useForm from "@/hook/useForm";
import { ReactNode } from "react";
import { SignupType } from "./type";

export default function SignupContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const {
    state: signupState,
    setState: setSignupState,
    onChange: handleChange,
  } = useForm<SignupType>({
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
  return (
    <SignupContext.Provider
      value={{ signupState, setSignupState, handleChange }}
    >
      {children}
    </SignupContext.Provider>
  );
}
