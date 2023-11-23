export type AttachmentsType = "FILE" | "URL";

export interface ApplyRequestItmeType {
  url: string;
  type: AttachmentsType;
}

export interface ApplyRequestBody {
  attachments: ApplyRequestItmeType[];
}
