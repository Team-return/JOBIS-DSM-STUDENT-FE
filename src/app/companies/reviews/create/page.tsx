"use client";

import { useState } from "react";
import ReviewForm from "@/components/company/ReviewForm";
import FillBtn from "@/components/common/Button/FillBtn";
import { useRouter, useSearchParams } from "next/navigation";
import { useCreateReviews } from "@/apis/reviews";
import { qnaElementsType } from "@/apis/reviews/type";
import InputsComponents from "@/components/account/singup/signupPages/InputsComponents";
import TextFiled from "@/components/common/TextFiled";
import RadioBtn from "@/components/common/RadioBtn";
import { type } from "os";

type InterviewField = {
  key: string;
  label: string;
  placeholder?: string;
  type?: "input" | "radio";
};

const interviewFields: InterviewField[] = [
  {
    key: "companyName",
    label: "기업명",
    placeholder: "직접입력",
    type: "input",
  },
  {
    key: "position",
    label: "지원 직무",
    placeholder: "지원 직무에서 찾기",
    type: "input",
  },
  { key: "date", label: "면접 일자", placeholder: "yyyy.mm.dd", type: "input" },
  { key: "company", label: "기업", placeholder: "직접입력", type: "input" },
  {
    key: "interviewerCount",
    label: "면접관 수",
    placeholder: "직접입력",
    type: "input",
  },
  {
    key: "location",
    label: "면접 지역",
    type: "radio",
  },
  { key: "type", label: "면접 구분", type: "radio" },
];
export default function CreateReviews() {
  const { select, RadioBtnComponents } = RadioBtn();
  const router = useRouter();
  const params = useSearchParams();
  const companyId = Number(params.get("id"));
  const [qnaElements, setQnaElements] = useState<qnaElementsType[]>([
    { question: "", answer: "", code_id: 0 },
  ]);
  const mutateOption = {
    onSuccess: () => {
      router.push(`/companies/reviews/?id=${companyId}`);
    },
  };
  const { mutate: createReviews } = useCreateReviews(mutateOption);

  const handleClickCreateRevies = () => {
    createReviews({
      company_id: companyId,
      qna_elements: qnaElements,
    });
  };

  const handleChange = (
    index: number,
    name: keyof qnaElementsType,
    value: string | number
  ) => {
    setQnaElements((prev) => {
      const newReviews = [...prev];
      if (typeof value === "number") {
        newReviews[index].code_id = value;
      } else if (name !== "code_id") {
        newReviews[index][name] = value;
      }
      return newReviews;
    });
  };

  const removeReviewList = (index: number) => {
    setQnaElements((prev) => {
      let newReviews = [...prev];
      newReviews = newReviews.filter((_, idx) => idx !== index);
      return newReviews;
    });
  };

  return (
    <div className="w-2/3 mx-auto my-5">
      <p className="py-12 leading-10 text-center text-h4 font-b text-primaryBlue03">
        후기작성
      </p>
      <div className="flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <span className="text-h5 font-b">면접 정보</span>
          <span className="font-R text-subBlue">
            * 표시는 필수 입력 항목입니다.
          </span>
        </div>
        <div className="flex flex-col gap-6">
          {interviewFields.map((field, idx) =>
            field.type === "input" ? (
              <div key={idx} className="flex gap-6">
                <span className="w-[100px]">
                  {field.label}
                  <span className="text-subBlue">*</span>
                </span>
                <TextFiled
                  onChange={() => {}}
                  placeholder={field.placeholder}
                  className="flex-1"
                />
              </div>
            ) : (
              <div key={idx} className="flex gap-6">
                <span className="w-[100px]">
                  {field.label}
                  <span className="text-subBlue">*</span>
                </span>
                <RadioBtnComponents />
              </div>
            )
          )}
        </div>
      </div>
      {/* {qnaElements.map((qnaElement, idx) => (
        <ReviewForm
          key={idx}
          onChange={handleChange}
          removeReviews={removeReviewList}
          setState={setQnaElements}
          index={idx}
          {...qnaElement}
        />
      ))}
      <div className="flex justify-between">
        <FillBtn
          backgroundColor="#ccc"
          onClick={() => {
            setQnaElements((prev) => [
              ...prev,
              { question: "", answer: "", code_id: 0 },
            ]);
          }}
        >
          면접질문 추가
        </FillBtn>
        <div className="flex gap-3">
          <FillBtn
            backgroundColor="#ccc"
            onClick={() => {
              router.back();
            }}
          >
            이전으로
          </FillBtn>
          <FillBtn onClick={handleClickCreateRevies}>완료</FillBtn>
        </div>
      </div> */}
    </div>
  );
}
