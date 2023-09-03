"use client";

import AccountPageTemplate from "@/components/account/accountPageTemplate";
import InputsComponents from "@/components/account/singup/singupInputs";
import { useParams } from "next/navigation";

export default function SignupPage() {
  const param = useParams();
  const { page } = param;
  return (
    <AccountPageTemplate title="회원가입">
      <InputsComponents page={page} />
    </AccountPageTemplate>
  );
}
