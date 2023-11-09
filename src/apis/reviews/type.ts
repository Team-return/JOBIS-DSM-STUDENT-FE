export interface getReviewListResponseProps {
  reviews: getReviewListProps[];
}

export interface getReviewListProps {
  review_id: string;
  year: number;
  writer: string;
  date: string;
}

export interface getReviewDetailResponseProps {
  qna_responses: getReviewDetailProps[];
}

export interface getReviewDetailProps {
  question: string;
  answer: string;
  area: string;
}
