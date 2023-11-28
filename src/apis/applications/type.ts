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
  application_id: number;
  company: string;
  attachments: ApplyRequestItmeType[];
  application_status: ApplicationsStatusType;
}

export interface ApplicationsResponseType {
  applications: ApplicationItemType[];
  count: number
}

export interface ApplyRequestBody {
  attachments: ApplyRequestItmeType[];
}