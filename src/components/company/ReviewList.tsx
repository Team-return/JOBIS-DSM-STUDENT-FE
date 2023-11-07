"use client";

import { getReviewDetails, GetReviewList } from "@/apis/reviews";
import { getReviewListProps } from "@/apis/reviews/type";
import { Icon } from "@team-return/design-system";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ReviewList() {
  const params = useSearchParams();
  const { data: reviewList, isLoading } = GetReviewList(params.get("id")!);

  if (isLoading)
    return (
      <div className="w-full text-center text-b2 font-m leading-b2 text-[#7f7f7f] mt-[200px]">
        Loading...
      </div>
    );

  if (reviewList?.reviews.length === 0)
    return (
      <div className="w-full text-center text-b2 font-m leading-b2 text-[#7f7f7f] mt-[200px]">
        아직 후기가 없어요
      </div>
    );

  return (
    <>
      {reviewList!.reviews.map((item) => (
        <ReviewContainer {...item} />
      ))}
    </>
  );
}

function ReviewContainer({ review_id, writer, date }: getReviewListProps) {
  const { data: reviewDetails } = getReviewDetails(review_id);
  return (
    <>
      {reviewDetails?.qna_responses.map((item) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <>
            <div
              className="w-full px-3 py-5 border-b border-[#e5e5e5] flex justify-between cursor-pointer hover:bg-[#fcfcfc]"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <p className="leading-6 text-b3 font-r text-prmyBlue03">
                {item.question}
              </p>
              <Icon
                icon="Chevron"
                direction={isOpen ? "top" : "bottom"}
                color="liteBlue"
              />
            </div>
            {isOpen && (
              <div className="p-4 bg-[#fafafa] w-full flex relative min-h-[100px] pb-10 gap-1">
                <p className="text-b3 font-r leading-b3 text-[#444444] flex-1 whitespace-pre-line">
                  {item.answer}
                </p>
                <div className="text-caption font-r leading-caption text-[#4F95D4] px-2 py-1 bg-white rounded-[8px] h-[26px]">
                  {item.area}
                </div>
                <p className="text-caption font-r leading-caption text-[#7f7f7f] absolute bottom-4 right-4">
                  {date} · {writer}
                </p>
              </div>
            )}
          </>
        );
      })}
    </>
  );
}
