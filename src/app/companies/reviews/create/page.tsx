"use client";

import { useState } from "react";
import ReviewForm from "@/components/company/ReviewForm";
import FillBtn from "@/components/common/Button/FillBtn";
import { useRouter, useSearchParams } from "next/navigation";
import { useCreateReviews } from "@/apis/reviews";
import { qnaElementsType } from "@/apis/reviews/type";

export default function CreateReviews() {
  const router = useRouter();
  const params = useSearchParams();
  const companyId = Number(params.get('id'))  
  const [qnaElements, setQnaElements] = useState<qnaElementsType[]>([
    { question: "", answer: "", code_id: 0 },
  ]);
  const mutateOption = {
    onSuccess: () => {
      router.push(`/companies/reviews/?id=${companyId}`)
    }
  }
  const { mutate: createReviews } = useCreateReviews(mutateOption);

  const handleClickCreateRevies = () => {
    createReviews({
      company_id:companyId,
      qna_elements: qnaElements
    })
  }

  const handleChange = (
    index: number,
    name: keyof qnaElementsType,
    value: string | number
  ) => {
    setQnaElements(prev => {
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
    setQnaElements(prev=>{
      let newReviews = [...prev];
      newReviews = newReviews.filter((_,idx)=>idx !== index);
      return newReviews;
    })
  }

  return (
    <div className="w-2/3 mx-auto my-5">
      <p className="py-12 leading-10 text-center text-h4 font-b text-primaryBlue03">
        후기작성
      </p>
      {qnaElements
        .map((qnaElement, idx) => (
          <ReviewForm key={idx} onChange={handleChange} removeReviews={removeReviewList} setState={setQnaElements} index={idx} {...qnaElement} />
        ))}
      <div className="flex justify-between">
        <FillBtn
          backgroundColor="#ccc"
          onClick={() => {
            setQnaElements(prev => ([
              ...prev,
              { question: "", answer: "", code_id: 0 }
            ]));
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
      </div>
    </div>
  );
}
