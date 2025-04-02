export interface NoticeListResponseType {
    id: number
    title: string
    created_at: string
}

export interface NoticeListResponse {
    notices: NoticeListResponseType[]
}

export interface NoticeDetailResponse {
    title: string;
    content: string;
    created_at: string;
    attachments: AttachmentResponse[] | null;
}

type AttachmentType =
  | "FILE"
  | "URL"

export interface AttachmentResponse {
    url: string;
    type: AttachmentType;
    id: string;
}