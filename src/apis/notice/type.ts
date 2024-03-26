export interface NoticeListResponse {
    id: number
    title: string
    created_at: string
}

export interface NoticeDetailResponse {
    title: string;
    content: string;
    created_at: string;
    attachments: AttachmentResponse[];
}

type AttachmentType =
  | "FILE"
  | "URL"

export interface AttachmentResponse {
    url: string;
    type: AttachmentType;
}