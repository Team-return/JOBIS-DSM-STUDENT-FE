export interface QueryStringType {
  [key: string]: string;
}

export interface RecruitmentsQueryType extends QueryStringType {
  page: string;
  job_code: string;
  tech_code: string;
  name: string;
  winter_intern: string;
}

export interface CompaniesQueryType extends QueryStringType {
  page: string;
  name: string;
}
