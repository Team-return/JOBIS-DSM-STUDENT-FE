import { SignupContext } from "@/context/SignupContext";
import { useContext } from "react";

export default function useSignUpContext() {
  return useContext(SignupContext);
}
