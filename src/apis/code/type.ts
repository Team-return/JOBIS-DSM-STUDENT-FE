export interface GetCodeType {
  codes: CodeType[];
}

export interface ResponesType {
  code: number;
  keyword: string;
}

export type CodeType = "JOB" | "TECH" | "BUSINESS_AREA";
