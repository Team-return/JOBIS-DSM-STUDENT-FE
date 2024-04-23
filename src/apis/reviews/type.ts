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

export interface qnaElementsType {
  question: string;
  answer: string;
  code_id: number;
}

export interface createReviewRequestType {
  company_id: number;
  qna_elements: qnaElementsType[]
}