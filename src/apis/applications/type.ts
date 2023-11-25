export type AttachmentsType = "FILE" | "URL";

export interface ApplyRequestItmeType {
  url: string;
  type: AttachmentsType;
}

export type ApplicationsStatus =
  | "REQUESTED"
  | "APPROVED"
  | "FAILED"
  | "PASS"
  | "REJECTED";

export interface ApplicationItemType {
  application_id: number;
  company: string;
  attachments: ApplyRequestItmeType[];
  application_status: ApplicationsStatus;
}

export interface ApplicationsResponseType {
  applications: ApplicationItemType[];
  count: number
}
