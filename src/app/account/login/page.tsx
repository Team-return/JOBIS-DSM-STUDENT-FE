import LoginStateMenagement from "../../../components/account/login/loginStateManagement";

export default function LoginPage() {
  return (
    <div className="max-w-[450px] gap-30 py-70 px-0 w-full m-auto">
      <div>
        <p className="font-bold text-center leading-h5 text-h5 text-skyBlue">
          로그인
        </p>
      </div>
      <main className="flex flex-col w-full">
        <LoginStateMenagement />
      </main>
    </div>
  );
}
