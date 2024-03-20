"use client";

import { useToastStore } from "@team-return/design-system";

//적어도 하나의 알파벳, 숫자, 특수문자를 포함해야합니다.
export const password_word_regex = (password: string) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])/.test(password);
};

//총 길이가 8에서 16사이의 문자열이어야 합니다.
export const password_len_regex = (password: string) => {
  return /^.{8,16}$/.test(password);
};

//알파벳, 숫자, 특수 문자 중에서만 이루어져야 합니다
export const password_required_regex = (password: string) => {
  return /^[A-Za-z\d$@$!%*#?&]+$/.test(password);
};

export const CheckPasswordFormat = () => {
  const { append } = useToastStore();
  return (password: string, callBack: () => void) => {
    if (!password_word_regex(password)) {
      append({
        title: "비밀번호 오류",
        message: "적어도 하나의 알파벳, 숫자, 특수문자를 포함해야합니다!",
        type: "RED",
      });
      return;
    }
    if (!password_len_regex(password)) {
      append({
        title: "비밀번호 오류",
        message: "길이가 8에서 16사이의 문자열이어야 합니다!",
        type: "RED",
      });
      return;
    }
    if (!password_required_regex(password)) {
      append({
        title: "비밀번호 오류",
        message: "알파벳, 숫자, 특수 문자로만 이루어져야 합니다!",
        type: "RED",
      });
      return;
    }
    callBack();
  }
};
