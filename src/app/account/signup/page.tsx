"use client";

import { styled } from "styled-components";
import Image from "next/image";
import Backgroundg from "@public/LoginBackground.svg";
import SingupContainer from "@/components/account/singup/signupStateManagement";
import AccountPageTemplate from "@/components/account/accountPageTemplate";

export default function SignupPage() {
  return (
    <AccountPageTemplate title="회원가입">
      <SingupContainer />
    </AccountPageTemplate>
  );
}