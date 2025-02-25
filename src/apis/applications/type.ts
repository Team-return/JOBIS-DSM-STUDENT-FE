export type AttachmentsType = "FILE" | "URL";

export interface ApplyRequestItmeType {
  url: string;
  type: AttachmentsType;
}

export type ApplicationsStatusType =
  | "REQUESTED"
  | "APPROVED"
  | "FAILED"
  | "PASS"
  | "REJECTED";

export interface ApplicationItemType {
  recruitment_id: number;
  application_id: number;
  company: string;
  attachments: ApplyRequestItmeType[];
  application_status: ApplicationsStatusType;
}

export interface ApplicationsResponseType {
  applications: ApplicationItemType[];
  count: number;
}

export interface ApplyRequestBody {
  attachments: ApplyRequestItmeType[];
}

export interface RejectionResponseType {
  rejection_reason: string;
}

export type EmploymentStatsResponse = {
  classes: {
    class_id: number;
    employment_rate_response_list: {
      id: number;
      company_name: string;
      logo_url: string;
    }[];
    total_students: number;
    passed_students: number;
  }[];
};
