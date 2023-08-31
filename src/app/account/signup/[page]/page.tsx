"use client";

import SingupContainer from "@/components/account/singup/signupStateManagement";
import AccountPageTemplate from "@/components/account/accountPageTemplate";

export default function SignupPage() {
  return (
      <AccountPageTemplate title="회원가입">
        <SingupContainer />
      </AccountPageTemplate>
  );
}
