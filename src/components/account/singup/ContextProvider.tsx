import { SignupContext } from "@/context/SignupContext";
import {
  ChangeEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { SignupType } from "./type";

export default function SignupContextProvider({
  children,
}: {
  children: ReactNode;
}) {
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
  return (
    <SignupContext.Provider
      value={{ signupState, setSignupState, handleChange }}
    >
      {children}
    </SignupContext.Provider>
  );
}
