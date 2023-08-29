import { RequestBody } from "@/apis/students/type";

export interface SignupType extends RequestBody {
  passwordCheck: string;
}

export interface IsHiddenProps {
  password: Boolean;
  passwordCheck: Boolean;
}