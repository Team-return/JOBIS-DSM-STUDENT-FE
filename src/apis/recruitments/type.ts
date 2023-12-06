export interface RecruitmentsListResponseType {
  recruitments: RecruitmentsListType[];
}

export interface RecruitmentsListType {
  id: number;
  company_name: string;
  company_profile_url: string;
  train_pay: number;
  military_support: boolean;
  hiring_jobs: number;
  job_code_list: string;
  bookmarked: boolean;
}

export interface RecruitmentsDetailType extends RecruitmentsDetailTable {
  company_id: number;
  company_profile_url: string;
  company_name: string;
}

export interface RecruitmentsDetailTable {
  areas: AreasType[];
  required_grade: number | null;
  start_time: string;
  end_time: string;
  required_licenses: string[] | [];
  hiring_progress: HiringProgressType[];
  train_pay: number;
  pay: string | null;
  benefits: string | null;
  military: boolean;
  submit_document: string;
  start_date: string;
  end_date: string;
  etc: string | null;
}

export interface AreasType {
  id: number;
  job: string[];
  tech: string[];
  hiring: number;
  major_task: string;
  preferential_treatment: string | null;
}

export interface GetNumberOfPagesType {
  total_page_count: number;
}

type HiringProgressType =
  | "CULTURE_INTERVIEW"
  | "DOCUMENT"
  | "TASK"
  | "LIVE_CODING"
  | "TECH_INTERVIEW"
  | "FINAL_INTERVIEW"
  | "PERSONALITY"
  | "AI"
  | "CODING_TEST";
