"use client";

import { RequestBody } from "@/apis/user/type";
import TextFiled from "@/components/common/TextFiled";
import React, { useState } from "react";

interface PropsType {
  inputStates: RequestBody;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LoginInputs({ inputStates, handleChange }: PropsType) {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  return (
    <div className="flex flex-col gap-[14px] pt-[40px] pb-[12px] px-0">
      <TextFiled
        value={inputStates.account_id}
        onChange={handleChange}
        width="100%"
        height={48}
        name="account_id"
        label="이메일"
        placeholder="이메일을 입력해주세요"
      />
      <TextFiled
        value={inputStates.password}
        onChange={handleChange}
        width="100%"
        height={48}
        name="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        enterEvent={() => {
          setIsHidden((prev) => !prev);
        }}
        customType={isHidden ? "EyesClose" : "EyesOpen"}
        type={isHidden ? "password" : "text"}
      />
    </div>
  );
}

export default React.memo(LoginInputs);
