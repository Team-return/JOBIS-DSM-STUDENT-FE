"use client";

import { getReviewDetails, GetReviewList } from "@/apis/reviews";
import { getReviewListProps } from "@/apis/reviews/type";
import { useSearchParams } from "next/navigation";
import ReviewItem from "./ReviewItem";

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
        <ReviewContainers {...item} />
      ))}
    </>
  );
}

function ReviewContainers({ review_id, writer, date }: getReviewListProps) {
  const { data: reviewDetails } = getReviewDetails(review_id);
  return (
    <>
      {reviewDetails?.qna_responses.map((item) => (
        <ReviewItem item={item} writer={writer} date={date} />
      ))}
    </>
  );
}
