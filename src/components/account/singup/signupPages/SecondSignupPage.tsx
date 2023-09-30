import { Signup } from "@/apis/students";
import LargeBtn from "@/components/common/Button/LargeBtn";
import RadioBtn from "@/components/common/RadioBtn";
import TextFiled from "@/components/common/TextFiled";
import useSignUpContext from "@/hook/useSignupContext";
import { theme } from "@team-return/design-system";
import React, { useEffect } from "react";

function SecondSignupPage() {
  const { select, RadioBtnComponents } = RadioBtn();
  const { signupState, setSignupState, handleChange } = useSignUpContext();
  const { grade, name, class_room, number, gender, password, email } =
    signupState;

  useEffect(() => {
    setSignupState((prev) => ({ ...prev, ["gender"]: select }));
  }, [select]);

  const { mutate } = Signup();

  const SignupAPI = () => {
    const RequestBody = {
      email,
      password,
      gender,
      name,
      grade: Number(grade),
      class_room: Number(class_room),
      number: Number(number),
    };
    mutate(RequestBody);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 py-10">
        <TextFiled
          value={name}
          onChange={handleChange}
          width="100%"
          name="name"
          label="이름"
          placeholder="이름을 입력해주세요"
        />
        <div className="flex gap-3">
          <TextFiled
            value={grade}
            onChange={handleChange}
            width="100%"
            height={48}
            name="grade"
            type="number"
            label="학번"
            placeholder="학년"
          />
          <TextFiled
            value={class_room}
            onChange={handleChange}
            width="100%"
            height={48}
            name="class_room"
            type="number"
            label="ㅤ"
            placeholder="반"
          />
          <TextFiled
            value={number}
            onChange={handleChange}
            width="100%"
            height={48}
            name="number"
            type="number"
            label="ㅤ"
            placeholder="번호"
          />
        </div>
        <div>
          <p
            className={`text-caption leading-caption font-m text-[${theme.color.gray80}] mb-1`}
          >
            성별
          </p>
          <div className="flex gap-3">
            <RadioBtnComponents />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col items-center w-full mt-[50px] gap-[15px] text-[${theme.color.gray60}]`}
      >
        <LargeBtn
          text="완료"
          disabled={
            !!signupState.name &&
            !!signupState.grade &&
            !!signupState.class_room &&
            !!signupState.number &&
            !!signupState.gender
          }
          onClick={SignupAPI}
        />
      </div>
    </div>
  );
}

export default React.memo(SecondSignupPage);
