import React from "react";
import { useGetCode } from "@/apis/code";
import DropDown from "@/components/common/DropDown";
import TextFiled from "@/components/common/TextFiled";
import useForm from "@/hook/useForm";
import { useRef, useState } from "react";
import { theme } from "@team-return/design-system";
import { qnaElementsType } from "@/apis/reviews/type";

interface PropsType {
  question: string;
  answer: string;
  code_id: number;
  index: number;
  onChange: (idx: number, name: keyof qnaElementsType, value: string) => void;
  setState: React.Dispatch<React.SetStateAction<qnaElementsType[]>>;
  removeReviews: (index:number) => void;
}

export default function ReviewForm({
  question,
  answer,
  code_id,
  index,
  onChange,
  setState: setQnaElements,
  removeReviews
}: PropsType) {
  const textarea = useRef<HTMLTextAreaElement | null>(null);

  const { data: codes } = useGetCode("JOB");

  const [isFocus, setIsFocus] = useState<boolean>(false);

  const jobCodeDropdownItems = codes?.codes.map(item => ({
    code: item.code.toString(),
    label: item.keyword,
  }));

  const handleResizeHeight = () => {
    if (textarea?.current) {
      textarea.current.style.height = "auto";
      textarea.current.style.height = textarea.current.scrollHeight + "px";
    }
  };
  return (
    <div className="mb-10 relative">
      <div className="flex gap-3">
        <TextFiled
          label="면접 질문"
          placeholder="면접 질문 입력"
          value={question}
          name="question"
          onChange={e => {
            onChange(index, "question", e.target.value);
          }}
          className="flex-1"
        />
        <div className="w-fit">
          <p className="text-caption text-[#333333] font-m mb-[4px]">
            질문 분야
          </p>
          <DropDown
            title="분야선택"
            items={jobCodeDropdownItems ?? [{ code: "1", label: "" }]}
            onClickItem={(itemCode: string) => {
              setQnaElements(prev => {
                const updatedElements = [...prev];
                updatedElements[index].code_id = Number(itemCode);
                return updatedElements;
              });
            }}
            selected={code_id}
          />
        </div>
      </div>
      <p className="text-caption text-[#333333] font-m mb-[4px] mt-4">답변</p>
      <textarea
        ref={textarea}
        value={answer}
        name="answer"
        onChange={e => {
          onChange(index, "answer", e.target.value);
          handleResizeHeight();
        }}
        className="border border-solid rounded-[8px] px-4 py-3 text-b3 font-r leading-b3 outline-none w-full min-h-[200px]"
        placeholder="질문에 어떻게 답했나요?"
        style={{
          borderColor: isFocus ? theme.color.liteBlue : "#cccccc",
        }}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
      />
      <button onClick={()=>{removeReviews(index)}} className="absolute bottom-1 right-[-8%] text-caption text-[#7f7f7f] font-r p-2">삭제</button>
    </div>
  );
}
