"use client";

import { useRouter, useSearchParams } from "next/navigation";
import SecondSignupPage from "./SecondSignupPage";
import FirstSignupPage from "./FirstSignupPage";

export default function InputsComponents() {
  const params = useSearchParams();
  const page = params.get("page");
  const router = useRouter();
  switch (page) {
    case "1":
      return <FirstSignupPage />;
    case "2":
      return <SecondSignupPage />;
    default:
      router.push("signup?page=1");
      return <> </>;
  }
}
