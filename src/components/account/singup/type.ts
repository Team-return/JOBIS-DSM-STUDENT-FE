import { SendAuthCodeType } from "@/apis/auth/type";
import { RequestBody } from "@/apis/students/type";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface SignupType extends RequestBody {
  passwordCheck: string;
  auth_code: string;
}

export interface IsHiddenProps {
  password: Boolean;
  passwordCheck: Boolean;
}

export interface FirstInputsPropsType {
  inputStates: SignupType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setInputsStates?: React.Dispatch<React.SetStateAction<SignupType>>;
}

export interface SecondInputsPropsType {
  inputStates: SignupType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  SandAuthCodeAPI?: UseMutateFunction<
    any,
    AxiosError<unknown, any>,
    SendAuthCodeType,
    unknown
  >;
}

export interface ThirdInputsPropsType {
  inputStates: SignupType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isHidden: IsHiddenProps;
  setIsHidden: React.Dispatch<React.SetStateAction<IsHiddenProps>>;
}
