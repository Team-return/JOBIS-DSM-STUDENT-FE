export interface CompaniesListResponseType {
  companies: CompaniesListType[];
}

export interface CompaniesListType {
  id: number;
  name: string;
  logo_url: string;
  take: number;
  has_recruitment: boolean;
}

export interface CompaniesDetailsType extends CompaniesDetailsTable {
  business_number: string;
  company_name: string;
  company_profile_url: string;
  recruitment_id: number | null;
}

export interface CompaniesDetailsTable {
  company_introduce: string;
  main_zip_code: string;
  main_address: string;
  main_address_detail: string;
  representative_name: string;
  founded_at: string;
  worker_number: number;
  take: number;
  attachments: any[];
  service_name: string;
  business_area: string;
}

export interface CompaniesForReviewType {
  id: number;
  name: string;
}

export interface GetCompaniesForReviewingResponse {
  companies: CompaniesForReviewType[];
}
