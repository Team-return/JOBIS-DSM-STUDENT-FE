export interface GetCodeType {
  codes: ResponesType[];
}

export interface ResponesType {
  code: number;
  keyword: string;
  job_type: string;
}

export type CodeType = "JOB" | "TECH" | "BUSINESS_AREA";
