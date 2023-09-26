import DotPagenation from "@/components/account/singup/signupPages/DotPagenation";
import InputsComponents from "@/components/account/singup/signupPages/InputsComponents";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="max-w-[450px] gap-30 py-70 px-0 w-full m-auto relative">
      <div>
        <p className="font-bold text-center leading-h5 text-h5 text-skyBlue">
          회원가입
        </p>
      </div>
      <main className="flex flex-col items-center w-full ">
        <InputsComponents />
        <p className="mt-5 text-black text-caption font-m">
          이미 계정이 있으신가요?{" "}
          <Link className="font-b text-subBlue" href={"/account/login"}>
            로그인
          </Link>
        </p>
      </main>
      <DotPagenation />
    </div>
  );
}
