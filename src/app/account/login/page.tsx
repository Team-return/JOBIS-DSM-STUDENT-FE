"use client";

import AccountPageTemplate from "@/components/account/accountPageTemplate";
import LoginStateMenagement from "../../../components/account/login/loginStateManagement";

export default function LoginPage() {
  return (
    <AccountPageTemplate title="로그인">
      <LoginStateMenagement />
    </AccountPageTemplate>
  );
}
